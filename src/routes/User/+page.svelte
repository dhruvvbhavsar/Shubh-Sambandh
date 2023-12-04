<script lang="ts">
	import type { PageData } from './$types';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import Profile from './Profile.svelte';
	import logo from '../../assets/logo.png';

	export let data: PageData;
	const users = data.users;
	const user = data.user;
</script>

<div>
	<nav class="flex h-20 flex-row justify-between bg-red-900">
		<div class="my-auto pl-8">
			<img src={logo} width="60px" alt="" />
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
					class="mb-2 mr-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
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
