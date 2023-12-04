import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/server/prisma';

export const POST: RequestHandler = async ({ request }) => {
	const { id, data } = await request.json();
	const res = await prisma.details.create({
		data: {
			userId: id,
			personal_details: data.personal_details,
			astrology_details: data.astrology_details,
			educational_details: data.educational_details,
			professional_details: data.professional_details,
			family_details: data.family_details,
			lifestyle_details: data.lifestyle_details,
			medical_details: data.medical_details,
			partner_preferences: data.partner_preferences,
			spiritual_details: data.spiritual_details
		}
	});
	await prisma.authUser.update({
		data: {
			isProfileComplete: true
		},
		where: {
			id: id
		}
	});
	return json({ message: 'success' });
};
