import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, "/User");
};
