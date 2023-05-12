<script lang="ts">
	import type { PageData } from './$types';

	let open = false;
	export let data: PageData;
	const users = data.users

	function calculateAge(dateOfBirthString: string | number | Date) {
		const dateOfBirth = new Date(dateOfBirthString);
		const now = new Date();

		const yearsDiff = now.getFullYear() - dateOfBirth.getFullYear();
		const monthsDiff = now.getMonth() - dateOfBirth.getMonth();
		const daysDiff = now.getDate() - dateOfBirth.getDate();

		if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
			return yearsDiff - 1;
		}

		return yearsDiff;
	}
</script>

<div>
	<nav class="flex h-20 flex-row justify-between bg-gray-900">
		<div class="my-auto pl-8">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="h-8 w-8 md:h-14 md:w-14"
				fill="white"
			>
				<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
				/>
			</svg>
		</div>
		<div class="my-auto flex h-3/5 flex-row gap-6 pl-24 text-white">
			<h1 class="my-auto">{data.user.serialNumber}</h1>
			<div class="ml- my-auto h-10 w-10 rounded-full bg-white">
				<img
					class="h-full w-full rounded-full object-contain"
					src={data.user.profilePictureUrl}
					alt=""
				/>
			</div>
			<form method="post">
				<button
					type="submit"
					class="mb-2 mr-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Sign out</button
				>
			</form>
		</div>
	</nav>

	<div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
		{#each users as user }
		<div class="w-full overflow-hidden rounded-lg bg-blue-300 p-4 shadow-lg">
			<div
				class="h-60 bg-cover bg-center"
				style="background-image: url('{user.profilePictureUrl}')"
			/>
			<div class="mt-4 flex items-center justify-between">
				<div class="text-lg font-medium">
					{user.firstName}, {calculateAge(user.dateOfBirth)}
				</div>
				<div class="flex items-center">
					<svg class="mr-2 h-4 w-4 fill-current text-gray-400" viewBox="0 0 20 20">
						<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M16 10a6 6 0 11-12 0 6 6 0 0112 0zm-6-8a2 2 0 11-4 0 2 2 0 014 0zM2 16a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2z"
						/>
					</svg>
					<div class="text-sm text-gray-600">{user.city}, {user.country}</div>
				</div>
			</div>
		</div>
		{/each}
	</div>
</div>
