import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals,params }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/Sign');
	console.log(user);

	const profile = await prisma.authUser.findMany({
		where: {
			id: params.slug
		}
	});

    return {profile}
};
