import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";
import prisma from "$lib/server/prisma";
  

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, "/Sign");
	console.log(user)

	const users = await prisma.authUser.findMany();

	return {
		user,users
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

