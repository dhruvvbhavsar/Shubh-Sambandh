<script lang="ts">
	import { Button } from '$components/ui/button';
	import { toast } from 'svoast';
	import { formData } from '../../../form_store';

	const age_range: string[] = [
		'Younger than me',
		'Same age as me',
		'Older than me',
		'No specific preference'
	];

	const marital_status = ['Never Married', 'Divorced', 'Awaiting Divorce', 'Widowed', 'Separated'];

	const devotional_preferences = ['Connected to ISKCON', 'No specific preference'];

	const diet = [
		'Vegetarian',
		'Non-vegetarian',
		'Vegan',
		'Jain (no root vegetables)',
		'Sattvik (no onion/garlic)'
	];

	const location = [
		'Same city as me',
		'Same state as me',
		'Same country as me',
		'Different country but willing to relocate',
		'No specific preference'
	];

	const family_background = [
		'Traditional and Cultured',
		'Modern and Open-minded',
		'Balanced mix of Traditional and Modern Values',
		'No specific preference'
	];

	const annual_income = [
		'Less than 1,00,000',
		'1,00,000-3,00,000',
		'3,00,001-5,00,000',
		'5,00,001-8,00,000',
		'8,00,001-12,00,000',
		'12,00,001-15,00,000',
		'15,00,001-20,00,000',
		'20,00,001-25,00,000',
		'Greater than 25,00,000',
		'No specific preference'
	];

	const occupation = [
		'Professional/White-collar job',
		'Business/Self-employed',
		'Skilled/Technical job',
		'Not employed',
		'Homemaker',
		'No specific preference'
	];

	const education = [
		'High School or Below',
		"Bachelor's Degree",
		"Master's Degree",
		'Doctorate or Professional Degree'
	];

	const rashi = [
		'Mesh',
		'Karka',
		'Tula',
		'Makar',
		'Vrisabh',
		'Simha',
		'Vrishchik',
		'Kumbha',
		'Mithuna',
		'Kanya',
		'Dhanu',
		'Meen'
	];
	let p_devotional: string[] = [];
	let p_age_range: string[] = [];
	let p_initiation_status: string;
	let p_chanting_status: string;
	let p_specific_rashi: string[] = [];
	let p_marital_status: string[] = [];
	let age_difference: string;
	let p_education: string[] = [];
	let p_occupation: string[] = [];
	let p_annual_income: string[] = [];
	let p_family_background: string[] = [];
	let p_location: string[] = [];
	let p_diet: string[] = [];
	let p_post_living: string;
	let p_other_post_living: string;
	let p_language: string;
	let p_manglik: string;
	let p_rashi: string;

	function handleSubmit(event: any) {
		event.preventDefault();

		// Collect form data
		const partnerPreferencesData = {
			p_devotional,
			p_age_range,
			p_initiation_status,
			p_chanting_status,
			p_specific_rashi,
			p_marital_status,
			age_difference,
			p_education,
			p_occupation,
			p_annual_income,
			p_family_background,
			p_location,
			p_diet,
			p_post_living,
			p_other_post_living,
			p_language,
			p_manglik,
			p_rashi
		};

		// Update the formData store with partnerPreferencesData
		formData.update((data) => ({ ...data, partner_preferences: partnerPreferencesData }));

		// Log the updated formData to see the changes
		formData.subscribe((updatedData) => {
			console.log('Updated Form Data:', updatedData);
		});
		toast.success("Saved.", {
			duration: 1000,
		})
	}
</script>

<form on:submit={handleSubmit} class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
	<h1
	class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-white capitalize "
	>
		Partner preferences
	</h1>
	<div class="col-span-full">
		<label for="p_age_range" class="block mb-2 text-lg text-white"
			>Age Range</label
		>

		{#each age_range as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_age_range}
					name="p_age_range"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	{#if p_age_range.includes('Younger than me') || p_age_range.includes('Older than me')}
		<div class="col-span-full">
			<label for="age_differencee" class="block mb-2 text-sm text-white"
				>Age Difference</label
			>
			<select
				bind:value={age_difference}
				name="age_differencee"
				class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select option</option>
				<option value="± 0-2 years age difference">± 0-2 years age difference</option>
				<option value="± 3-5 years age difference">± 3-5 years age difference</option>
				<option value="± 6-10 years age difference">± 6-10 years age difference</option>
			</select>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="p_marital_status" class="block mb-2 text-lg text-white"
			>Marital Status</label
		>

		{#each marital_status as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_marital_status}
					name="p_marital_status"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	<div class="col-span-full">
		<label for="p_education" class="block mb-2 text-sm text-white"
			>Education Preference of Partner</label
		>
		{#each education as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_education}
					name="p_education"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	<div class="col-span-full">
		<label for="p_occupation" class="block mb-2 text-sm text-white"
			>Occupation Preference of Partner</label
		>
		{#each occupation as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_occupation}
					name="p_occupation"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	{#if !p_occupation.includes('Homemaker') && !p_occupation.includes('Not employed')}
		<div class="col-span-full">
			<label for="p_annual_income" class="block mb-2 text-sm text-white"
				>Annual Income of Partner</label
			>
			{#each annual_income as value}
				<label class="text-base flex gap-4 text-white">
					<input
						type="checkbox"
						bind:group={p_annual_income}
						name="p_annual_income"
						{value}
						class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
					/>
					{value}
				</label>
			{/each}
		</div>
	{/if}

	<div class="col-span-full">
		<label for="p_family_background" class="block mb-2 text-sm text-white"
			>Family Background Preference of Partner</label
		>
		{#each family_background as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_family_background}
					name="p_family_background"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	<div class="col-span-full">
		<label for="p_devotional" class="block mb-2 text-lg text-white"
			>Devotional Preference of Partner</label
		>

		{#each devotional_preferences as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_devotional}
					name="p_devotional"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	{#if p_devotional.includes('Connected to ISKCON')}
		<div class="col-span-full">
			<label for="p_initiation_status" class="block mb-2 text-sm text-white"
				>Initiation Status of Partner</label
			>
			<select
				bind:value={p_initiation_status}
				name="p_initiation_status"
				class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select option</option>
				<option value="Should be Initiated">Should be Initiated</option>
				<option value="No specific preference">No specific preference</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="p_chanting_status" class="block mb-2 text-sm text-white"
				>Chanting Status of Partner</label
			>
			<select
				bind:value={p_chanting_status}
				name="p_chanting_status"
				class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select option</option>
				<option value="Regularly Chants">Regularly Chants</option>
				<option value="Occasionally Chants">Occasionally Chants</option>
				<option value="Interested but Not Regularly Chanting"
					>Interested but Not Regularly Chanting</option
				>
				<option value="Not Chanting">Not Chanting</option>
				<option value="No specific preference">No specific preference</option>
			</select>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="p_location" class="block mb-2 text-sm text-white"
			>Location Preference of Partner</label
		>
		{#each location as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_location}
					name="p_location"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	<div class="col-span-full">
		<label for="p_diet" class="block mb-2 text-sm text-white"
			>Diet Preference of Partner</label
		>
		{#each diet as value}
			<label class="text-base flex gap-4 text-white">
				<input
					type="checkbox"
					bind:group={p_diet}
					name="p_diet"
					{value}
					class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	<div class="col-span-full">
		<label for="p_post_living" class="block mb-2 text-sm text-white"
			>After marriage, where would you want your partner and you to live?</label
		>
		<select
			bind:value={p_post_living}
			name="p_post_living"
			class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
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

	{#if p_post_living === 'others'}
		<div class="col-span-full">
			<label for="p_other_post_living" class="block mb-2 text-sm text-white"
				>Please specify where you would want your partner and you to live after marriage</label
			>
			<input
				type="text"
				bind:value={p_other_post_living}
				name="p_other_post_living"
				class="block w-full px-5 py-3 text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="p_language" class="block mb-2 text-sm text-white"
			>Language Preference of Partner</label
		>
		<select
			bind:value={p_language}
			name="p_language"
			class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Same mother tongue as me">Same mother tongue as me</option>
			<option value="Different mother tongue but can communicate in my language"
				>Different mother tongue but can communicate in my language</option
			>
			<option value="No specific language preference">No specific language preference</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_manglik" class="block mb-2 text-sm text-white"
			>Manglik Dosha of Partner</label
		>
		<select
			bind:value={p_manglik}
			name="p_manglik"
			class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Yes, my partner should be Manglik">Yes, my partner should be Manglik</option>
			<option value="No, my partner should not be Manglik"
				>No, my partner should not be Manglik</option
			>
			<option value="No preference">No preference</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_rashi" class="block mb-2 text-sm text-white"
			>Rashi Preference</label
		>
		<select
			bind:value={p_rashi}
			name="p_rashi"
			class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Prefer a Specific Rashi">Prefer a Specific Rashi (Please specify)</option>
			<option value="No Specific Rashi Preference">No Specific Rashi Preference</option>
		</select>
	</div>

	{#if p_rashi === 'Prefer a Specific Rashi'}
		<div class="col-span-full">
			<label for="p_specific_rashi" class="block mb-2 text-lg text-white"
				>Which Rashi partner do you prefer?</label
			>

			{#each rashi as value}
				<label class="text-base flex gap-4 text-white">
					<input
						type="checkbox"
						bind:group={p_specific_rashi}
						name="p_specific_rashi"
						{value}
						class="block text-white placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
					/>
					{value}
				</label>
			{/each}
		</div>
	{/if}
	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Partner Preferences</Button
	>
</form>
