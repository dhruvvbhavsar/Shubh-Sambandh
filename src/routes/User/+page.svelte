<script lang="ts">
	import type { PageData } from './$types';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import Profile from './Profile.svelte';

	export let data: PageData;
	const users = data.users;
	const user = data.user;
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
		{#each users as user}
			<Profile {user} />
		{/each}
	</div>
</div>

<AlertDialog.Root open={!user.isPaid}>
	<AlertDialog.Content class="bg-white">
		<AlertDialog.Header>
			<AlertDialog.Title>Let's get you a premium membership...</AlertDialog.Title>
			<AlertDialog.Description>
				Get personalized matches, unlimited enquiries and more!
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Skip</AlertDialog.Cancel>
			<AlertDialog.Action>
				<a href="/Pricing">Okay</a>
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>

<AlertDialog.Root open={user.isPaid && !user.isProfileComplete}>
	<AlertDialog.Content class="bg-white">
		<AlertDialog.Header>
			<AlertDialog.Title>Woah!</AlertDialog.Title>
			<AlertDialog.Description>
				We see that you have purchased a premium membership. But haven't completed your profile yet.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Skip</AlertDialog.Cancel>
			<AlertDialog.Action>
				<a href="/User/detailed-registration-page">Okay</a>
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
