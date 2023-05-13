import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import AWS from 'aws-sdk';
import { auth } from '$lib/server/lucia';

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
	signatureVersion: 'v4'
});

const bucketName = process.env.S3_BUCKET_NAME;
let uploadUrll: string;

async function generateUploadURL() {
	const imageName = `${Date.now()}.jpg`;
	const params = {
		Bucket: bucketName,
		Key: imageName,
		Expires: 60 * 5
	};

	const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
	uploadUrll = uploadUrl.split('?')[0];
	return uploadUrl;
}

async function checkStatusCode(url: string) {
	const response = await fetch(url);
	if (response.status === 403) {
		return false;
	} else if (response.headers.get('Content-Type')?.includes('xml')) {
		return false;
	} else {
		return true;
	}
}

const userSchema = z.object({
	firstName: z.string().min(3).max(20).trim(),
	lastName: z.string().min(3).max(20).trim(),
	gender: z.string().default('Male'),
	caste: z.string().default('hindu'),
	dateOfBirth: z.string(),
	timeOfBirth: z.string(),
	city: z.string().max(20),
	country: z.string().max(20),
	maritalStatus: z.string().default('never married'),
	other_caste: z.string().nullable(),
	profilePictureUrl: z
		.string()
		.default(
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
		),
	passwordHash: z.string().min(8).max(64),
	mobileNumber: z.string().min(10).max(10),
	email: z.string().email()
});


export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(302, '/');
	} else {
		const form = await superValidate(userSchema);
		const url = await generateUploadURL();

		return { form, url };
	}
};

export const actions = {
	register: async ({ request }) => {
		const form = await superValidate(request, userSchema);
		form.data.profilePictureUrl = await checkStatusCode(uploadUrll)
			? uploadUrll
			: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
			const count = await prisma.authUser.count();
			const paddedCount = String(count + 1).padStart(4, '0');
			var ssId = `SS#${paddedCount}`;
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: form.data.email,
					password: form.data.passwordHash
				},
				attributes: {
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
					mobileNumber: form.data.mobileNumber,
					serialNumber: ssId,
					email: form.data.email
				}
			});
			return message(form, `${form.data.firstName} ${form.data.lastName}`);
		} catch {
			// username already in use
			return fail(400, {form});
		}
	}
} satisfies Actions;
