import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/Sign');
	let gender = user['gender'] === 'Male' ? 'Female' : 'Male';
	console.log(user);

	const users = await prisma.authUser.findMany({
		select: {
			firstName: true,
			profilePictureUrl: true,
			city: true,
			country: true,
			dateOfBirth: true,
			id: true
		},
		// where: {
		// 	gender: gender,
		// 	NOT: {
		// 		id: user.userId
		// 	}
		// }
	});

	return {
		user,
		users
	};
};

export const actions: Actions = {
	default: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
	}
};
