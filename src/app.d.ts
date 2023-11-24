// See https://kit.svelte.dev/docs/types#app

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/lucia').Auth;
		type UserAttributes = {
			firstName: string;
			lastName: string;
			mobileNumber: string;
			email: string;
			gender: string;
			caste: string;
			maritalStatus: string;
			country: string;
			city: string;
			profilePictureUrl: string;
			serialNumber: string;
			dateOfBirth: DateTime;
			timeOfBirth: string;
			isPaid: Boolean;
		};
	}
}

export {};
