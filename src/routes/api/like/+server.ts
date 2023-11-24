import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/server/prisma';

export const POST: RequestHandler = async ({ request }) => {
	const { sender, receiver } = await request.json();

	const data = await prisma.bookmark.create({
		data: {
			userId: sender,
			bookmarkedUserId: receiver
		},
		select: {
			id: true
		}
	});
	return json({ data: data });
};
