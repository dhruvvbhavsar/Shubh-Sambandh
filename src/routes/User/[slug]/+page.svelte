<script lang="ts">
	import Button from '$components/ui/button/Button.svelte';
	import { HeartIcon } from 'lucide-svelte';
	export let data;
	let click: Boolean = data.isLiked;
	let connect: Boolean = data.isConnected;
	const person = data.profile[0];
	const user = data.user;
	const details = data.details;

	async function handleLike() {
		if (click) return;
		click = true;
		const res = await fetch('/api/like', {
			method: 'POST',
			body: JSON.stringify({ sender: user.userId, receiver: person.id })
		});
		console.log(res.json());
	}

	async function handleConnect() {
		if (connect) return;
		connect = true;
		const res = await fetch('/api/connect', {
			method: 'POST',
			body: JSON.stringify({ sender: user.userId, receiver: person.id })
		});
		console.log(res.json());
	}
</script>

<main class="flex flex-col sm:flex-row">
	<section class="relative flex h-screen w-full flex-col items-center justify-center bg-white">
		<div class="relative flex h-48 w-48 items-center justify-center rounded-2xl bg-gray-300">
			<div class="absolute -right-4 -top-4 rounded-full bg-blue-600 px-2 py-1 text-xs text-white">
				Basic
			</div>
			<img
				class="w-full h-full object-cover rounded-2xl object-center"
				src={person.profilePictureUrl}
				alt=""
			/>
		</div>

		<div class="relative mt-1">
			<h2 class="mt-2 text-center text-2xl font-semibold text-gray-700">
				{person.firstName + ' ' + person.lastName}
			</h2>
		</div>

		<div class="mt-8 flex gap-4 items-center">
			<button
				on:click={handleConnect}
				disabled={connect ? true : false}
				class="bg-blue-500 disabled:bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				>{connect ? 'Sent' : 'Connect'}</button
			>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div on:click={handleLike}>
				<HeartIcon class="text-red-600 w-10 h-10 cursor-pointer {click ? 'fill-red-600' : ''}" />
			</div>
		</div>
	</section>
	<section class="h-screen w-full bg-gray-200 p-8">
		<div class="mb-4 text-xl font-semibold text-gray-700">Basic Information</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col">
				<span class="text-gray-600">Serial Number</span>
				<span>{person.serialNumber}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">First Name</span>
				<span>{person.firstName}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Last Name</span>
				<span>{person.lastName}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Gender</span>
				<span>{person.gender}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Caste</span>
				<span>{person.caste}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Date of Birth</span>
				<span>{person.dateOfBirth.toDateString()}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Time of Birth</span>
				<span>{person.timeOfBirth}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Marital Status</span>
				<span>{person.maritalStatus}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Mobile Number</span>
				<span class="select-none blur-sm">{person.mobileNumber}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Email</span>
				<span class="select-none blur-sm">{person.email}</span>
			</div>
		</div>
	</section>
</main>

{#if details}
	<p>This is a paid user</p>
{/if}
