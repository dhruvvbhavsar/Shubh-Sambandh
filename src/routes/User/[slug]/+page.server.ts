import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { auth } from '$lib/server/lucia';
import prisma from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/Sign');

	const profile = await prisma.authUser.findMany({
		where: {
			id: params.slug
		}
	});

	const like = await prisma.bookmark.findFirst({
		where: {
			userId: user.id,
			bookmarkedUserId: profile[0].id
		}
	});

	const connect = await prisma.connection.findFirst({
		where: {
			senderId: user.id,
			receiverId: profile[0].id
		}
	});

	const isLiked = like ? true : false;
	const isConnected = connect ? true : false;

	const details = profile[0].isPaid
		? await prisma.details.findMany({
				where: {
					userId: params.slug
				}
		  })
		: null;
	return { profile, user, isLiked, isConnected, details };
};
