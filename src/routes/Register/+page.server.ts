import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import bycrypt from 'bcrypt';
import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/prisma';
import AWS from 'aws-sdk';

// Create an instance of the S3 client with your AWS credentials
const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
    signatureVersion: 'v4'
});

const bucketName = process.env.S3_BUCKET_NAME;

async function generateUploadURL(fileName: string) {
	const imageName = fileName
	const params = ({
		Bucket: bucketName,
		Key: imageName,
		Expires: 60 * 3
	})
	
	const uploadUrl = await s3.getSignedUrlPromise('putObject', params)
	return uploadUrl
}

const userSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	gender: z.string(),
	caste: z.string(),
	dateOfBirth: z.string(),
	timeOfBirth: z.string(),
	city: z.string(),
	country: z.string(),
	maritalStatus: z.string(),
	profilePictureUrl: z
		.string()
		.url()
		.default(
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
		),
	passwordHash: z.string(),
	mobileNumber: z.string(),
	email: z.string()
});



export const load: PageServerLoad = async () => {
	// Server API:
	const form = await superValidate(userSchema)
	const url = await generateUploadURL("test") as string;

	// Always return { form } in load and form actions.
	return { form , url };
};

export const actions: Actions = {
	default: async ({ request }) => {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, userSchema);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data
		try {
			// Get the number of existing users
			const count = await prisma.user.count();

			// Generate the next serial number by adding 1 to the count
			const paddedCount = String(count + 1).padStart(4, '0');

			// Generate the formatted user ID by concatenating "SS#" with the serial number
			const ssId = `SS#${paddedCount}`;
			await prisma.user.create({
				data: {
					serialNumber: ssId,
					firstName: form.data.firstName,
					lastName: form.data.lastName,
					gender: form.data.gender,
					caste: form.data.caste,
					dateOfBirth: new Date(form.data.dateOfBirth),
					timeOfBirth: form.data.timeOfBirth,
					city: form.data.city,
					country: form.data.country,
					maritalStatus: form.data.maritalStatus,
					profilePictureUrl: form.data.profilePictureUrl,
					passwordHash: await bycrypt.hash(form.data.passwordHash, 10),
					mobileNumber: form.data.mobileNumber,
					email: form.data.email
				}
			});
			console.log('User created');
			console.log('POST', form);
		} catch (error) {
			console.log(error);
			return fail(500, { message: 'Could not create user' });
		}

		// Yep, return { form } here too
		return { form };
	}
};
