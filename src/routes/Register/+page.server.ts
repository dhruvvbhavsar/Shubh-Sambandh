import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import bycrypt from 'bcrypt'

const userSchema = z.object({
    id: z.number().int().positive(),
    firstName: z.string(),
    lastName: z.string(),
    gender: z.string(),
    caste: z.string(),
    dateOfBirth: z.date(),
    timeOfBirth: z.string(),
    city: z.string(),
    country: z.string(),
    maritalStatus: z.string(),
    profilePictureUrl: z.string().url(),
    passwordHash: z.string(),
    mobileNumber: z.string(),
    email: z.string().email(),
  });

  export const load = async () => {
	// Server API:
	const form = await superValidate(userSchema);


	// Always return { form } in load and form actions.
	return { form };
};

  