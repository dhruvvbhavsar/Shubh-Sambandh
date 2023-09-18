<script lang="ts">
	import { Button } from '$components/ui/button';
	import { careers_list } from './options';
	import Select from 'svelte-select';
	import { formData } from '../../../form_store';

	let career: any;
	let designation: string;
	let employer_or_organization: string;
	let income: string;

	function handleSubmit(event: any) {
		event.preventDefault();

		// Collect form data
		const professionalData = {
			career,
			designation,
			employer_or_organization,
			income
		};

		// Update the formData store with professionalData
		formData.update((data) => ({ ...data, professional_details: professionalData }));

		// Log the updated formData to see the changes
		formData.subscribe((updatedData) => {
			console.log('Updated Form Data:', updatedData);
		});
	}
</script>

<form on:submit={handleSubmit} class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
	<h1
		class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
	>
		Professional Details
	</h1>
	<div class="col-span-full">
		<label for="hobbies" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Profession</label
		>

		<select
			bind:value={income}
			name="income"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			{#each careers_list as item}
				<option value={item.label}>{item.label}</option>
			{/each}
		</select>
	</div>

	<div class="col-span-full">
		<label for="designation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Designation</label
		>
		<input
			type="text"
			bind:value={designation}
			name="designation"
			class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		/>
	</div>

	<div class="col-span-full">
		<label for="employer_or_organization" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Employer/Organization name</label
		>
		<input
			type="text"
			bind:value={employer_or_organization}
			name="employer_or_organization"
			class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		/>
	</div>

	<div class="col-span-full">
		<label for="income" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Annual Income</label
		>
		<select
			bind:value={income}
			name="income"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Less than 1,00,000">Less than 1,00,000</option>
			<option value="1,00,000-3,00,000">1,00,000-3,00,000</option>
			<option value="3,00,001-5,00,000">3,00,001-5,00,000</option>
			<option value="5,00,001-8,00,000">5,00,001-8,00,000</option>
			<option value="8,00,001-12,00,000">8,00,001-12,00,000</option>
			<option value="12,00,001-15,00,000">12,00,001-15,00,000</option>
			<option value="15,00,001-20,00,000">15,00,001-20,00,000</option>
			<option value="20,00,001-25,00,000">20,00,001-25,00,000</option>
			<option value="Greater than 25,00,000">Greater than 25,00,000</option>
		</select>
	</div>
	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Professional Details</Button
	>
</form>
