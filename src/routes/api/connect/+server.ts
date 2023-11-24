import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/server/prisma';

export const POST: RequestHandler = async ({ request }) => {
	const { sender, receiver } = await request.json();
	const data = await prisma.connection.create({
		data: {
			senderId: sender,
			receiverId: receiver
		},
		select: {
			id: true
		}
	});
	return json({ data: data });
};
