import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import bycrypt from 'bcrypt'
import type{Actions, PageServerLoad} from './$types'


const userSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    gender: z.string(),
    caste: z.string(),
    dateOfBirth: z.date(),
    timeOfBirth: z.string(),
    city: z.string(),
    country: z.string(),
    maritalStatus: z.string(),
    profilePictureUrl: z.string().url().default("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"),
    passwordHash: z.string(),
    mobileNumber: z.string(),
    email: z.string().email(),
  });

  export const load: PageServerLoad = async () => {
	// Server API:
	const form = await superValidate(userSchema);


	// Always return { form } in load and form actions.
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, userSchema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data

		// Yep, return { form } here too
		return { form };
	}
};




  