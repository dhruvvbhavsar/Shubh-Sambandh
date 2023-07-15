<script lang="ts">
	import { X } from 'lucide-svelte';
	import { sportsList, diseases, hobbies } from './options';
	import { Textarea } from '$components/ui/textarea';
	import { Button } from '$components/ui/button';
	import Select from 'svelte-select';
	import SportsComponent from './SportsComponent.svelte';
	import HobbiesComponent from './HobbiesComponent.svelte';
	let diet: string;
	let otherDiet: string;
	let selected: string[];
</script>

<form class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
	<h1
		class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
	>
		Personal Details
	</h1>
	<div>
		<label for="placeOfBirth" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Place of Birth</label
		>
		<select
			name="placeOfBirth"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Place of Birth</option>
			<option value="india">India</option>
			<option value="outside-india">Out of India</option>
		</select>
	</div>

	<div>
		<label for="bloodGroup" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Blood Group</label
		>
		<select
			name="bloodGroup"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Blood Group</option>
			<option value="A+">A+</option>
			<option value="A-">A-</option>
			<option value="B+">B+</option>
			<option value="B-">B-</option>
			<option value="AB+">AB+</option>
			<option value="AB-">AB-</option>
			<option value="O+">O+</option>
			<option value="O-">O-</option>
			<option value="na">Not Yet Tested</option>
		</select>
	</div>

	<div>
		<label for="caste" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Diet</label>
		<select
			bind:value={diet}
			name="diet"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Diet</option>
			<option value="veg">Vegetarian</option>
			<option value="non-veg">Non-Vegetarian</option>
			<option value="jain">Jain (no root vegetables)</option>
			<option value="sattvik">Sattvik (no onion/garlic)</option>
			<option value="others">Others (please specify)</option>
		</select>

		{#if diet === 'others'}
			<div class="mt-2">
				<label for="otherDiet" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Please specify</label
				>
				<input
					type="text"
					bind:value={otherDiet}
					name="diet"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}
	</div>

	<HobbiesComponent items={hobbies} />
	<SportsComponent items={sportsList} />
	<div class="col-span-full">
		<label for="bio" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Bio</label>
		<Textarea
			class="text-white border-gray-600 rounded-lg h-32 placeholder:text-sm placeholder:text-gray-400 text-base"
			placeholder="You can share some details about your personality, interests, and background. This will help potential matches to get to know you better. Consider mentioning your hobbies, passions, and any unique qualities that make you who you are. Take this opportunity to express what you value in a relationship. Keep your repsonse concise, yet informative, focusing on the most important aspects of your personality and life. Feel free to update you profile periodically as your interests and preferences evolve."
		/>
	</div>
	<Button class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Personal Details</Button
	>
</form>
