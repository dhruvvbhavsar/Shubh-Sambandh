<script lang="ts">
	import { Info, X } from 'lucide-svelte';
	import { Textarea } from '$components/ui/textarea';
	import { Button } from '$components/ui/button';
	import { formData } from '../../../form_store';
	import { Country, State, City } from 'country-state-city';
	import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '$components/ui/tooltip';

	let countries = Country.getAllCountries();

	$: current_con_iso =
		countries.find((country) => country.name === current_country)?.isoCode ?? 'IN';
	$: current_states = State.getStatesOfCountry(current_con_iso);
	$: current_state_iso =
		current_states.find((state) => state.name === current_state)?.isoCode ?? 'MH';
	$: current_cities = City.getCitiesOfState(current_con_iso, current_state_iso);

	$: permanent_con_iso =
		countries.find((country) => country.name === permanent_country)?.isoCode ?? 'IN';
	$: permanent_states = State.getStatesOfCountry(permanent_con_iso);
	$: permanent_state_iso =
		permanent_states.find((state) => state.name === permanent_state)?.isoCode ?? 'MH';
	$: permanent_cities = City.getCitiesOfState(permanent_con_iso, permanent_state_iso);

	$: if (is_permanent) {
		permanent_country = current_country;
		permanent_state = current_state;
		permanent_city = current_city;
	}

	function toggleIsPermanent(value: boolean) {
		is_permanent = value;
	}

	let country_of_birth: string;
	let current_country: string;
	let current_state: string;
	let current_city: string;
	let is_permanent: boolean = true;
	let permanent_country: string;
	let permanent_state: string;
	let permanent_city: string;
	let citizenship_status: string;
	let other_citizenship_status: string;
	let dual_citizenship: string;
	let dual_citizenship_countries: string[] = [];
	let blood_group: string;
	let diet: string;
	let other_diet: string;
	let marital_status: string;
	let have_children: string;
	let how_many_children: number | string;
	let category: string;
	let caste: string;
	let mother_tongue: string;
	let other_tongue: string;
	let height: string;
	let weight: string;
	let pwd: string;
	let pwd_type: string;
	let other_pwd: string;
	let pwd_relation: string;
	let other_pwd_relation: string;
	let pwd_relation_name: string;
	let pwd_relation_number: string;
	let bio: string;

	function handleSubmit(event: any) {
		event.preventDefault();

		const personalData = {
			country_of_birth,
			current_country,
			current_state,
			current_city,
			permanent_country,
			permanent_state,
			permanent_city,
			citizenship_status,
			other_citizenship_status,
			dual_citizenship,
			dual_citizenship_countries,
			blood_group,
			diet,
			other_diet,
			marital_status,
			have_children,
			how_many_children,
			category,
			caste,
			mother_tongue,
			other_tongue,
			height,
			weight,
			pwd,
			pwd_type,
			other_pwd,
			pwd_relation,
			other_pwd_relation,
			pwd_relation_name,
			pwd_relation_number,
			bio
		};
		formData.update((data) => ({ ...data, personal_details: personalData }));
		formData.subscribe((updatedData) => {
			console.log('Updated Form Data:', updatedData.personal_details);
		});
	}
</script>

<form on:submit={handleSubmit} class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
	<h1
		class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
	>
		Personal Details
	</h1>
	<div class="col-span-full">
		<label for="countryOfBirth" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Country of Birth</label
		>
		<select
			bind:value={country_of_birth}
			name="countryOfBirth"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Country of Birth</option>
			{#each countries as country}
				<option value={country.name}>{country.name}</option>
			{/each}
		</select>
	</div>

	<div class="col-span-full">
		<label for="currentCountry" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Current Country</label
		>
		<select
			bind:value={current_country}
			name="currentCountry"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Current Country</option>
			{#each countries as country}
				<option value={country.name}>{country.name}</option>
			{/each}
		</select>
	</div>

	{#if current_country}
		<div class="col-span-full">
			<label for="currentState" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Current State</label
			>
			<select
				bind:value={current_state}
				name="currentState"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Current State</option>
				{#each current_states as state}
					<option value={state.name}>{state.name}</option>
				{/each}
			</select>
		</div>
	{/if}

	{#if current_state}
		<div class="col-span-full">
			<label for="currentCity" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Current City</label
			>
			<select
				bind:value={current_city}
				name="currentCity"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Current City</option>
				{#each current_cities as city}
					<option value={city.name}>{city.name}</option>
				{/each}
			</select>
		</div>
	{/if}

	<div class="col-span-full flex flex-col items-center justify-center">
		<label for="p_marital_status" class="block mb-2 text-lg text-gray-600 dark:text-gray-200">
			Is your current address same as permanent address?
		</label>
		<div class="flex gap-4 text-gray-600 dark:text-gray-200">
			<label>
				<input
					type="radio"
					id="yes"
					name="p_marital_status"
					value={true}
					bind:group={is_permanent}
				/>
				Yes
			</label>
			<label>
				<input
					type="radio"
					id="no"
					name="p_marital_status"
					value={false}
					bind:group={is_permanent}
				/>
				No
			</label>
		</div>
	</div>

	{#if !is_permanent}
		<div class="col-span-full">
			<label for="permanentCountry" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Permanent Country</label
			>
			<select
				bind:value={permanent_country}
				name="permanentCountry"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Permanent Country</option>
				{#each countries as country}
					<option value={country.name}>{country.name}</option>
				{/each}
			</select>
		</div>

		{#if permanent_country}
			<div class="col-span-full">
				<label for="permanentState" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Permanent State</label
				>
				<select
					bind:value={permanent_state}
					name="permanentState"
					class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Permanent State</option>
					{#each permanent_states as state}
						<option value={state.name}>{state.name}</option>
					{/each}
				</select>
			</div>
		{/if}

		{#if permanent_state}
			<div class="col-span-full">
				<label for="permanentCity" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Permanent City</label
				>
				<select
					bind:value={permanent_city}
					name="permanentCity"
					class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Permanent City</option>
					{#each permanent_cities as city}
						<option value={city.name}>{city.name}</option>
					{/each}
				</select>
			</div>
		{/if}
	{/if}

	<div class="col-span-full">
		<label for="citizenshipStatus" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Citizenship Status</label
		>
		<select
			bind:value={citizenship_status}
			name="citizenshipStatus"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Citizenship Status</option>
			<option value="indian">Indian</option>
			<option value="nri">NRI (Non Residential Indian)</option>
			<option value="Overseas Citizenship of India">Overseas Citizenship of India</option>
			<option value="others">Others</option>
		</select>
	</div>

	{#if citizenship_status === 'others'}
		<div class="col-span-full">
			<label
				for="otherCitizenshipStatus"
				class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify your country where you hold your Citizenship</label
			>
			<select
				bind:value={other_citizenship_status}
				name="otherCitizenshipStatus"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Country</option>
				{#each countries as country}
					<option value={country.name}>{country.name}</option>
				{/each}
			</select>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="dualCitizenship" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Do you hold dual citizenship?</label
		>
		<select
			bind:value={dual_citizenship}
			name="dualCitizenship"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="yes">Yes</option>
			<option value="no">No</option>
		</select>
	</div>

	{#if dual_citizenship == 'yes'}
		<div class="col-span-full">
			<label
				for="otherCitizenshipStatus"
				class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify(Use CTRL or CMD + click to select multiple options. MAX ALLOWED = 2)</label
			>
			<select
				multiple
				bind:value={dual_citizenship_countries}
				name="otherCitizenshipStatus"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Country</option>
				{#each countries as country}
					<option value={country.name}>{country.name}</option>
				{/each}
			</select>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="bloodGroup" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Blood Group</label
		>
		<select
			bind:value={blood_group}
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

	<div class="col-span-full">
		<label for="diet" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Diet</label>
		<select
			bind:value={diet}
			name="diet"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Diet</option>
			<option value="Vegetarian">Vegetarian</option>
			<option value="Non-Vegetarian">Non-Vegetarian</option>
			<option value="Vegan">Vegan</option>
			<option value="Eggetarian">Eggetarian</option>
			<option value="Jain">Jain (no root vegetables)</option>
			<option value="Sattvik">Sattvik (no onion/garlic)</option>
			<option value="others">Others (please specify)</option>
		</select>
	</div>

	{#if diet === 'others'}
		<div class="col-span-full">
			<label for="otherDiet" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify your diet</label
			>
			<input
				type="text"
				bind:value={other_diet}
				name="otherDiet"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="marital_status" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
			>Marital Status</label
		>
		<select
			bind:value={marital_status}
			name="marital_status"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Marital Status</option>
			<option value="Never Married">Never Married</option>
			<option value="Divorced">Divorced</option>
			<option value="Awaiting Divorce">Awaiting Divorce</option>
			<option value="Widowed">Widowed</option>
			<option value="Separated">Separated</option>
		</select>
	</div>

	{#if ['Divorced', 'Awaiting Divorce', 'Widowed', 'Separated'].includes(marital_status)}
		<div class="col-span-full">
			<label for="have_children" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
				>Do you have children?</label
			>
			<select
				bind:value={have_children}
				name="have_children"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Marital Status</option>
				<option value="Yes">Yes</option>
				<option value="No">No</option>
			</select>
		</div>

		{#if have_children == 'Yes'}
			<div class="col-span-full">
				<label for="how_many_children" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
					>How many children do you have?</label
				>
				<select
					bind:value={how_many_children}
					name="how_many_children"
					class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Option</option>
					<option value=1>1</option>
					<option value=2>2</option>
					<option value=3>3</option>
					<option value=4>4</option>
					<option value="More">More</option>
				</select>
			</div>
		{/if}
	{/if}

	<div class="col-span-full">
		<label for="caste" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Category</label>
		<select
			bind:value={category}
			name="category"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select category</option>
			<option value="gen">General</option>
			<option value="Other Backward Class (OBC)">Other Backward Class (OBC)</option>
			<option value="Scheduled Tribe (ST)">Scheduled Tribe (ST)</option>
			<option value="Scheduled Caste (SC)">Scheduled Caste (SC)</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="caste" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Caste</label>
		<input
			type="text"
			placeholder="Your caste"
			bind:value={caste}
			name="caste"
			class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		/>
	</div>

	<div class="col-span-full">
		<label for="mother_tongue" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Mother Tongue</label
		>
		<select
			bind:value={mother_tongue}
			name="mother_tongue"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select mother tongue</option>
			<option value="Assamese">Assamese</option>
			<option value="Bengali">Bengali</option>
			<option value="Bodo">Bodo</option>
			<option value="Dogri">Dogri</option>
			<option value="Gujarati">Gujarati</option>
			<option value="Hindi">Hindi</option>
			<option value="Kannada">Kannada</option>
			<option value="Kashmiri">Kashmiri</option>
			<option value="Konkani">Konkani</option>
			<option value="Maithili">Maithili</option>
			<option value="Malayalam">Malayalam</option>
			<option value="Manipuri">Manipuri</option>
			<option value="Marathi">Marathi</option>
			<option value="Nepali">Nepali</option>
			<option value="Oriya">Oriya</option>
			<option value="Punjabi">Punjabi</option>
			<option value="Sanskrit">Sanskrit</option>
			<option value="Santhali">Santhali</option>
			<option value="Sindhi">Sindhi</option>
			<option value="Tamil">Tamil</option>
			<option value="Telugu">Telugu</option>
			<option value="Tulu">Tulu</option>
			<option value="Urdu">Urdu</option>
			<option value="others">Others(please specify)</option>
		</select>

		{#if mother_tongue === 'others'}
			<div class="col-span-full">
				<label for="other_tongue" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Please specify your Mother Tongue</label
				>
				<input
					type="text"
					bind:value={other_tongue}
					name="diet"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}
	</div>

	<div class="col-span-full">
		<label for="height" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Height</label>
		<select
			bind:value={height}
			name="height"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Height</option>
			<option value="Less than 4 feet (122 cm)">Less than 4 feet (122 cm)</option>
			<option value="Less than 5 feet (152 cm)">Less than 5 feet (152 cm)</option>
			<option value="5 feet to 5 feet 5 inches (152 cm to 165 cm)"
				>5 feet to 5 feet 5 inches (152 cm to 165 cm)</option
			>
			<option value="5 feet 6 inches to 5 feet 10 inches (168 cm to 178 cm)"
				>5 feet 6 inches to 5 feet 10 inches (168 cm to 178 cm)</option
			>
			<option value="5 feet 11 inches to 6 feet 2 inches (180 cm to 188 cm)"
				>5 feet 11 inches to 6 feet 2 inches (180 cm to 188 cm)</option
			>
			<option value="6 feet 3 inches or taller (191 cm+)"
				>6 feet 3 inches or taller (191 cm+)</option
			>
		</select>
	</div>

	<div class="col-span-full">
		<label for="weight" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Weight</label>
		<select
			bind:value={weight}
			name="weight"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Weight</option>
			<option value="<40 kgs">{'<40 kgs'}</option>
			<option value="40-50 kgs">40-50 kgs</option>
			<option value="51-60 kgs">51-60 kgs</option>
			<option value="61-70 kgs">61-70 kgs</option>
			<option value="71-80 kgs">71-80 kgs</option>
			<option value="81-90 kgs">81-90 kgs</option>
			<option value=">90 kgs">{'>90 kgs'}</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="pwd" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Person with Disability(PwD)</label
		>
		<select
			bind:value={pwd}
			name="pwd"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value={true}>Yes</option>
			<option value={false}>No</option>
		</select>
	</div>

	{#if pwd}
		<div class="col-span-full">
			<label for="pwd_type" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Type of Disability</label
			>
			<select
				bind:value={pwd_type}
				name="pwd_type"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Blindness">Blindness</option>
				<option value="Low-vision">Low-vision</option>
				<option value="Leprosy Cured Person">Leprosy Cured Person</option>
				<option value="Hearing impairment (Deaf and hard of hearing)"
					>Hearing impairment (Deaf and hard of hearing)</option
				>
				<option value="Locomotor Disability">Locomotor Disability</option>
				<option value="Dwarfism">Dwarfism</option>
				<option value="Intellectual Disability">Intellectual Disability</option>
				<option value="Mental Illness">Mental Illness</option>
				<option value="Autism Spectrum Disorder">Autism Spectrum Disorder</option>
				<option value="Cerebral Palsy">Cerebral Palsy</option>
				<option value="Muscular Dystrophy">Muscular Dystrophy</option>
				<option value="Chronic Neurological Conditions">Chronic Neurological Conditions</option>
				<option value="Specific Learning Disabilities (Dyslexia)"
					>Specific Learning Disabilities (Dyslexia)</option
				>
				<option value="Multiple Sclerosis">Multiple Sclerosis</option>
				<option value="Speech and Language Disability">Speech and Language Disability</option>
				<option value="Thalassemia">Thalassemia</option>
				<option value="Haemophilia">Haemophilia</option>
				<option value="Sickle Cell Disease">Sickle Cell Disease</option>
				<option value="Multiple Disabilities including deaf-blindness"
					>Multiple Disabilities including deaf-blindness</option
				>
				<option value="Acid Attack Victim">Acid Attack Victim</option>
				<option value="Parkinson's disease">Parkinson's disease</option>
				<option value="others">Others</option>
			</select>
		</div>

		{#if pwd_type === 'others'}
			<div class="col-span-full">
				<label for="other_pwd" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Please specify your Type of Disability</label
				>
				<input
					type="text"
					bind:value={other_pwd}
					name="diet"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		<div class="col-span-full">
			<label for="pwd_relation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Relation with PwD</label
			>
			<select
				bind:value={pwd_relation}
				name="pwd_relation"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Father">Father</option>
				<option value="Mother">Mother</option>
				<option value="Uncle">Uncle</option>
				<option value="Aunt">Aunt</option>
				<option value="Sister">Sister</option>
				<option value="Brother">Brother</option>
				<option value="Self">Self</option>
				<option value="others">Other</option>
			</select>
		</div>

		{#if pwd_relation === 'others'}
			<div class="col-span-full">
				<label for="other_pwd_relation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Please specify</label
				>
				<input
					type="text"
					bind:value={other_pwd_relation}
					name="other_pwd_relation"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		{#if pwd_relation !== 'Self'}
			<div class="col-span-full">
				<label for="pwd_relation_name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Name of Related Person</label
				>
				<input
					type="text"
					bind:value={pwd_relation_name}
					name="pwd_relation_name"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>

			<div class="col-span-full">
				<label for="pwd_relation_number" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Contact Number of Related Person</label
				>
				<input
					type="text"
					bind:value={pwd_relation_number}
					name="pwd_relation_number"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}
	{/if}

	<div class="col-span-full">
		<div class="flex gap-2 items-center mb-2">
			<label for="bio" class="block text-sm text-gray-600 dark:text-gray-200">Bio</label>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger><Info class="h-5 w-5 text-white" /></TooltipTrigger>
					<TooltipContent class="bg-current w-96">
						<p class="text-white text-justify">
							You can share some details about your personality, interests, and background. This
							will help potential matches to get to know you better. Consider mentioning your
							hobbies, passions, and any unique qualities that make you who you are. Take this
							opportunity to express what you value in a relationship. Keep your repsonse concise,
							yet informative, focusing on the most important aspects of your personality and life.
							Feel free to update you profile periodically as your interests and preferences evolve.
						</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
		<Textarea
			bind:value={bio}
			name="bio"
			class="text-white border-gray-600 rounded-lg h-32 placeholder:text-sm placeholder:text-gray-400 text-base"
			placeholder="Describe your personality in less than 200 words"
		/>
	</div>
	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Personal Details</Button
	>
</form>
