<script lang="ts">
	import SportsComponent from './SportsComponent.svelte';
	import HobbiesComponent from './HobbiesComponent.svelte';
	import { sportsList, hobbies } from './options';
	import { Button } from '$components/ui/button';
	import { formData } from '../../../form_store';

	let s_hobbies: any[] = [];
	let s_sports: any[] = [];
	let do_you_exercise: string;
	let exercise_thoughts: string;
	let who_do_you_live_with: string;
	let others_who_do_you_live_with: string;
	let after_marriage_plans: string;
	let others_after_marriage_plans: string;

	function handleSubmit(event: any) {
    event.preventDefault();
	
	const selectedHobbies = s_hobbies.map(hobby => hobby.label);
	const selectedSports = s_sports.map(sport => sport.label);
    // Collect form data
    const lifestyleData = {
      s_hobbies : selectedHobbies,
      s_sports: selectedSports,
      do_you_exercise,
      exercise_thoughts,
      who_do_you_live_with,
      others_who_do_you_live_with,
      after_marriage_plans,
      others_after_marriage_plans,
    };

    // Update the formData store with lifestyleData
    formData.update(data => ({ ...data, lifestyle_details: lifestyleData }));

    // Log the updated formData to see the changes
    formData.subscribe(updatedData => {
      console.log("Updated Form Data:", updatedData);
    });
  }
</script>

<form on:submit={handleSubmit} class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
	<h1
		class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
	>
		Lifestyle Details
	</h1>
	<HobbiesComponent items={hobbies} bind:value={s_hobbies} />
	<SportsComponent items={sportsList} bind:value={s_sports} />
	<div class="col-span-full">
		<label for="do_you_exercise" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Do you exercise?</label
		>
		<select
			bind:value={do_you_exercise}
			name="do_you_exercise"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Yes, regularly">Yes, regularly</option>
			<option value="Yes, occasionally">Yes, occasionally</option>
			<option value="No, but I plan to start">No, but I plan to start</option>
			<option value="No, and I don't intend to start">No, and I don't intend to start</option>
			<option value="others">Other</option>
		</select>
	</div>
	{#if do_you_exercise === 'others'}
		<div class="col-span-full">
			<label for="exercise_thoughts" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify</label
			>
			<input
				type="text"
				bind:value={exercise_thoughts}
				name="exercise_thoughts"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}
	<div class="col-span-full">
		<label for="who_do_you_live_with" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Who do you currently live with?</label
		>
		<select
			bind:value={who_do_you_live_with}
			name="who_do_you_live_with"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="With Parents">With Parents</option>
			<option value="With Siblings">With Siblings</option>
			<option value="With Extended Family">With Extended Family</option>
			<option value="Alone/Independently">Alone/Independently</option>
			<option value="With Roommates/Flatmates/PG">With Roommates/Flatmates/PG</option>
			<option value="others">Others</option>
		</select>
	</div>
	{#if who_do_you_live_with === 'others'}
		<div class="col-span-full">
			<label
				for="others_who_do_you_live_with"
				class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Please specify who do you currently live with</label
			>
			<input
				type="text"
				bind:value={others_who_do_you_live_with}
				name="others_who_do_you_live_with"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}
	<div class="col-span-full">
		<label for="after_marriage_plans" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>After marriage, where do you plan to live?</label
		>
		<select
			bind:value={after_marriage_plans}
			name="after_marriage_plans"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Living with Family">Living with Family</option>
			<option value="Living separately, but nearby to family"
				>Living separately, but nearby to family</option
			>
			<option value="Living separately, in a different city or region"
				>Living separately, in a different city or region</option
			>
			<option value="others">Others</option>
		</select>
	</div>
	{#if after_marriage_plans === 'others'}
		<div class="col-span-full">
			<label
				for="others_after_marriage_plans"
				class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Please specify where do you plan to live after marriage</label
			>
			<input
				type="text"
				bind:value={others_after_marriage_plans}
				name="others_after_marriage_plans"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}
	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Lifestyle Details</Button
	>
</form>
