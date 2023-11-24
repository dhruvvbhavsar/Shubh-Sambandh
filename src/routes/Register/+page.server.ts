import { message, superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/server/prisma';
import AWS from 'aws-sdk';
import { auth } from '$lib/server/lucia';

const userSchema = z.object({
	firstName: z.string().min(3).max(20).trim(),
	lastName: z.string().min(3).max(20).trim(),
	gender: z.string().default('Male'),
	caste: z.string().default('Hindu'),
	dateOfBirth: z.string(),
	timeOfBirth: z.string(),
	city: z.string(),
	country: z.string(),
	maritalStatus: z.string().default('Never married'),
	other_caste: z.string().nullable(),
	profilePictureUrl: z.string(),
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

		return { form };
	}
};

export const actions = {
	register: async ({ request }) => {
		const form = await superValidate(request, userSchema);
		console.log(form.data.profilePictureUrl);
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
					email: form.data.email,
					isPaid: false
				}
			});
			return message(form, `${form.data.firstName} ${form.data.lastName}`);
		} catch {
			// username already in use
			return fail(400, { form });
		}
	}
} satisfies Actions;
