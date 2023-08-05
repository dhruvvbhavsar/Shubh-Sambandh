<script lang="ts">
	import { Button } from '$components/ui/button';

	const age_range: string[] = [
		'Younger than me',
		'Same age as me',
		'Older than me',
		'No specific preference'
	];
	let p_age_range: string[] = [];

	const marital_status = ['Never Married', 'Divorced', 'Awaiting Divorce', 'Widowed', 'Separated'];
	let p_marital_status: string[] = [];

	const devotional_preferences = [
		'Connected to ISKCON',
		'Connected to any other spiritual organization',
		'No specific preference'
	];
	let p_devotional: string[] = [];

	let p_initiation_status: string;
	let p_chanting_status: string;

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
	let p_specific_rashi: string[] = [];

	let age_difference: string;
	let p_education: string;
	let p_occupation: string;
	let p_annual_income: string;
	let p_family_background: string;
	let p_location: string;
	let p_diet: string;
	let p_post_living: string;
	let p_other_post_living: string;
	let p_language: string;
	let p_manglik: string;
	let p_rashi: string;
</script>

<form class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
	<h1
		class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
	>
		Partner preferences
	</h1>
	<div class="col-span-full">
		<label for="p_age_range" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
			>Age Range</label
		>

		{#each age_range as value}
			<label class="text-base flex gap-4 text-gray-600 dark:text-gray-200">
				<input
					type="checkbox"
					bind:group={p_age_range}
					name="p_age_range"
					{value}
					class="block text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	{#if p_age_range.includes('Younger than me') || p_age_range.includes('Older than me')}
		<div class="col-span-full">
			<label for="age_differencee" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Age Difference</label
			>
			<select
				bind:value={age_difference}
				name="age_differencee"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select option</option>
				<option value="± 0-2 years age difference">± 0-2 years age difference</option>
				<option value="± 3-5 years age difference">± 3-5 years age difference</option>
				<option value="± 6-10 years age difference">± 6-10 years age difference</option>
			</select>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="p_marital_status" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
			>Marital Status</label
		>

		{#each marital_status as value}
			<label class="text-base flex gap-4 text-gray-600 dark:text-gray-200">
				<input
					type="checkbox"
					bind:group={p_marital_status}
					name="p_marital_status"
					{value}
					class="block text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	<div class="col-span-full">
		<label for="p_education" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Education Preference of Partner</label
		>
		<select
			bind:value={p_education}
			name="p_education"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="High School or Below">High School or Below</option>
			<option value="Bachelor's Degree">Bachelor's Degree</option>
			<option value="Master's Degree">Master's Degree</option>
			<option value="Doctorate or Professional Degree">Doctorate or Professional Degree</option>
			<option value="No specific preference">No specific preference</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_occupation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Occupation Preference of Partner</label
		>
		<select
			bind:value={p_occupation}
			name="p_occupation"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Professional/White-collar job">Professional/White-collar job</option>
			<option value="Business/Self-employed">Business/Self-employed</option>
			<option value="Skilled/Technical job">Skilled/Technical job</option>
			<option value="Not employed">Not employed</option>
			<option value="Homemaker">Homemaker</option>
			<option value="No specific preference">No specific preference</option>
		</select>
	</div>

	{#if p_occupation != 'Homemaker' && p_occupation != 'Not employed'}
		<div class="col-span-full">
			<label for="p_annual_income" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Annual Income of Partner</label
			>
			<select
				bind:value={p_annual_income}
				name="p_annual_income"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select option</option>
				<option value="Less than 1,00,000">Less than 1,00,000</option>
				<option value="1,00,000-3,00,000">1,00,000-3,00,000</option>
				<option value="3,00,001-5,00,000">3,00,001-5,00,000</option>
				<option value="5,00,001-8,00,000">5,00,001-8,00,000</option>
				<option value="8,00,001-12,00,000">8,00,001-12,00,000</option>
				<option value="12,00,001-15,00,000">12,00,001-15,00,000</option>
				<option value="15,00,001-20,00,000">15,00,001-20,00,000</option>
				<option value="20,00,001-25,00,000">20,00,001-25,00,000</option>
				<option value="Greater than 25,00,000">Greater than 25,00,000</option>
				<option value="No specific preference">No specific preference</option>
			</select>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="p_family_background" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Family Background Preference of Partner</label
		>
		<select
			bind:value={p_family_background}
			name="p_family_background"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Traditional and Cultured">Traditional and Cultured</option>
			<option value="Modern and Open-minded">Modern and Open-minded</option>
			<option value="Balanced mix of Traditional and Modern Values"
				>Balanced mix of Traditional and Modern Values</option
			>
			<option value="No specific preference">No specific preference</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_devotional" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
			>Devotional Preference of Partner</label
		>

		{#each devotional_preferences as value}
			<label class="text-base flex gap-4 text-gray-600 dark:text-gray-200">
				<input
					type="checkbox"
					bind:group={p_devotional}
					name="p_devotional"
					{value}
					class="block text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
				/>
				{value}
			</label>
		{/each}
	</div>

	{#if p_devotional.includes('Connected to ISKCON')}
		<div class="col-span-full">
			<label for="p_initiation_status" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Initiation Status of Partner</label
			>
			<select
				bind:value={p_initiation_status}
				name="p_initiation_status"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select option</option>
				<option value="Should be Initiated">Should be Initiated</option>
				<option value="No specific preference">No specific preference</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="p_chanting_status" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Chanting Status of Partner</label
			>
			<select
				bind:value={p_chanting_status}
				name="p_chanting_status"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
		<label for="p_location" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Location Preference of Partner</label
		>
		<select
			bind:value={p_location}
			name="p_location"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Same city as me">Same city as me</option>
			<option value="Same state as me">Same state as me</option>
			<option value="Same country as me">Same country as me</option>
			<option value="Different country but willing to relocate"
				>Different country but willing to relocate</option
			>
			<option value="No specific preference">No specific preference</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_diet" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Diet Preference of Partner</label
		>
		<select
			bind:value={p_diet}
			name="p_diet"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Vegetarian">Vegetarian</option>
			<option value="Non-vegetarian">Non-vegetarian</option>
			<option value="Vegan">Vegan</option>
			<option value="Jain (no root vegetables)">Jain (no root vegetables)</option>
			<option value="Sattvik (no onion/garlic)">Sattvik (no onion/garlic)</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_post_living" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>After marriage, where would you want your partner and you to live?</label
		>
		<select
			bind:value={p_post_living}
			name="p_post_living"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="p_other_post_living" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify</label
			>
			<input
				type="text"
				bind:value={p_other_post_living}
				name="p_other_post_living"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="p_language" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Language Preference of Partner</label
		>
		<select
			bind:value={p_language}
			name="p_language"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
		<label for="p_manglik" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Manglik Dosha of Partner</label
		>
		<select
			bind:value={p_manglik}
			name="p_manglik"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Yes, my partner should be Manglik">Yes, my partner should be Manglik</option>
			<option value="No, my partner should not be Manglik"
				>No, my partner should not be Manglik</option
			>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_rashi" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Rashi Preference</label
		>
		<select
			bind:value={p_rashi}
			name="p_rashi"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select option</option>
			<option value="Prefer a Specific Rashi">Prefer a Specific Rashi (Please specify)</option>
			<option value="No Specific Zodiac Sign Preference">No Specific Zodiac Sign Preference</option>
		</select>
	</div>

	{#if p_rashi === 'Prefer a Specific Rashi'}
		<div class="col-span-full">
			<label for="p_specific_rashi" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
				>Which Rashi partner do you prefer?</label
			>

			{#each rashi as value}
				<label class="text-base flex gap-4 text-gray-600 dark:text-gray-200">
					<input
						type="checkbox"
						bind:group={p_specific_rashi}
						name="p_specific_rashi"
						{value}
						class="block text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
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
