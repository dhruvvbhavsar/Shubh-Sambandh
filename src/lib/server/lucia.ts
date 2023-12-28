import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import prisma from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';

export const auth = lucia({
	adapter: prisma(new PrismaClient()),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			firstName: userData.firstName,
			lastname: userData.lastName,
			gender:  userData.gender,
			caste: userData.caste,
			country: userData.country,
			city:  userData.city,
			profilePictureUrl: userData.profilePictureUrl,
			serialNumber: userData.serialNumber,
			dateOfBirth: userData.dateOfBirth,
			timeOfBirth: userData.timeOfBirth,
			maritalStatus: userData.maritalStatus,
			mobileNumber: userData.mobileNumber,
			isPaid: userData.isPaid,
			isProfileComplete: userData.isProfileComplete
		}
	}
});

export type Auth = typeof auth;
