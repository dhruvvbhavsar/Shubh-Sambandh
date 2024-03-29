<script lang="ts">
	import { Button } from '$components/ui/button';
	import { toast } from 'svoast';
	import { formData } from '../../../form_store';
	import { books } from './options';
	import { spiritualOrgs } from './options';
	import { initiatingGurus } from './options';
	let isAffiliated: boolean = false;
	let spiritualOrgName: string;
	let otherOrgName: string;
	let willingness_support_each_other: string;

	let templeLocation: any;
	let haveCounsellor: boolean = false;
	let since_when_connected: string;
	let counsellorName: string;
	let counsellorNumber: number;
	let counsellorInitiationGuru: any;

	let doYouChant: string;
	let chantFreq: string;
	let howManyRounds: number | string;
	let chantingTimeline: string;

	let areYouInvolved: string;
	let attendFestivals: string;
	let areYouInitiated: string;
	let spiritualityImportance: string;

	let initiatedName: string;
	let aspiringtobeInitiated: string;
	let initiationGuru: string;

	let read_prabhupad_books: string;
	let prabhupad_books: string[];
	let bhagwatam_knowledge: string;

	let diet_pref: string;
	let other_diet_pref: string;
	let diet_prasadam: string;

	let committment_spiritual: string;
	let adherence_principles: string;

	let involvement: string;
	let participation: string;

	let willingness_for_service: string;
	let service_interests: string;

	let connection_culture: string;
	let other_connection_culture: string;
	let understanding_iskcon: string;

	let committment_readiness: string;
	let children_willingness: string;
	let children_education: string;

	function handleSubmit(event: any) {
		event.preventDefault();

		// Collect form data
		const spiritualData = {
			isAffiliated,
			templeLocation,
			since_when_connected,
			haveCounsellor,
			counsellorName,
			counsellorNumber,
			counsellorInitiationGuru,
			spiritualOrgName,
			otherOrgName,
			doYouChant,
			chantFreq,
			howManyRounds,
			chantingTimeline,
			areYouInvolved,
			attendFestivals,
			areYouInitiated,
			spiritualityImportance,
			initiatedName,
			aspiringtobeInitiated,
			initiationGuru,
			read_prabhupad_books,
			prabhupad_books,
			bhagwatam_knowledge,
			diet_pref,
			other_diet_pref,
			diet_prasadam,
			committment_spiritual,
			adherence_principles,
			involvement,
			participation,
			willingness_for_service,
			service_interests,
			connection_culture,
			other_connection_culture,
			understanding_iskcon,
			committment_readiness,
			children_willingness,
			children_education
		};

		// Update the formData store with spiritualData
		formData.update((data) => ({ ...data, spiritual_details: spiritualData }));

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
		Spiritual Details
	</h1>
	<div class="col-span-full">
		<label for="religious-affiliation" class="block mb-2 text-sm text-white "
			>Do you a religious affiliation with any spiritual organization?</label
		>
		<select
			bind:value={isAffiliated}
			name="religious-affiliation"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value={true}>Yes</option>
			<option value={false}>No</option>
		</select>
	</div>

	{#if isAffiliated}
		<div class="col-span-full">
			<label for="spiritualOrgName" class="block mb-2 text-sm text-white "
				>Which spiritual organization are you connected to?
			</label>
			<select
				bind:value={spiritualOrgName}
				name="bloodGroup"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="ISKCON">ISKCON</option>
				<option value="others">Other(please specify)</option>
			</select>
		</div>
	{/if}
	{#if spiritualOrgName === 'others' && isAffiliated}
		<div class="mt-2 col-span-full">
			<label for="otherOrgName" class="block mb-2 text-sm text-white "
				>Please specify about the spiritual organisation you are connected to</label
			>
			<input
				bind:value={otherOrgName}
				type="text"
				name="otherOrgName"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	{#if spiritualOrgName === 'ISKCON' && isAffiliated}
		<h1
			class="text-3xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			For ISKCON Devotees
		</h1>
		<div class="col-span-full">
			<label for="temple_location" class="block mb-2 text-sm text-white "
				>Location of the ISKCON Temple you are connected with</label
			>
			<select
				bind:value={templeLocation}
				name="temple_location"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				{#each spiritualOrgs as location}
					<option value={location.label}>{location.label}</option>
				{/each}
			</select>
		</div>
		<div class="col-span-full">
			<label for="since_when_connected" class="block mb-2 text-sm text-white "
				>Since when are you connected with ISKCON?</label
			>
			<select
				bind:value={since_when_connected}
				name="since_when_connected"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="<1 year">less than a year</option>
				<option value="1-3 years">1-3 years </option>
				<option value="3-5 years">3-5 years </option>
				<option value=">5 years">>5 years</option>
				<option value=">10 years">>10 years </option>
			</select>
		</div>
		<div class="col-span-full">
			<label for="religious-affiliation" class="block mb-2 text-sm text-white "
				>Do you have a Counsellor?</label
			>
			<select
				bind:value={haveCounsellor}
				name="religious-affiliation"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value={true}>Yes</option>
				<option value={false}>No</option>
			</select>
		</div>
		{#if haveCounsellor}
			<div class="mt-2 col-span-full">
				<label for="counsellorName" class="block mb-2 text-sm text-white "
					>Name of your Counsellor</label
				>
				<input
					bind:value={counsellorName}
					type="text"
					name="counsellorName"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
			<div class="mt-2 col-span-full">
				<label for="counsellorNumber" class="block mb-2 text-sm text-white "
					>Contact Number of your counsellor</label
				>
				<input
					bind:value={counsellorNumber}
					type="text"
					name="counsellorNumber"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
			<div class="col-span-full">
				<label for="temple_location" class="block mb-2 text-sm text-white "
					>Counselor's Spiritual Master</label
				>
				<select
					bind:value={counsellorInitiationGuru}
					name="temple_location"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Option</option>
					{#each initiatingGurus as location}
						<option value={location.label}>{location.label}</option>
					{/each}
				</select>
			</div>
		{/if}

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Devotional Practices
		</h1>
		<div class="col-span-full">
			<label for="doYouChant" class="block mb-2 text-sm text-white "
				>Do you chant the Hare Krishna Mahamantra?
			</label>
			<select
				bind:value={doYouChant}
				name="doYouChant"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="planning">Planning to Start</option>
			</select>
		</div>
		{#if doYouChant === 'yes'}
			<div class="col-span-full">
				<label for="chantFreq" class="block mb-2 text-sm text-white "
					>How often do you chant the Hare Krishna Mahamantra?
				</label>
				<select
					bind:value={chantFreq}
					name="chantFreq"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Option</option>
					<option value="daily">Every day</option>
					<option value="alternate days">Every alternate day</option>
					<option value="once or twice a week">Once or twice a week</option>
					<option value="once a week">Once in a week</option>
					<option value="sometimes">Sometimes</option>
					<option value="only on ekadashi">Only on Ekadashi or festivals</option>
				</select>
			</div>

			<div class="col-span-full">
				<label for="howManyRounds" class="block mb-2 text-sm text-white "
					>How many rounds of the Hare Krishna Mahamantra do you chant?
				</label>
				<select
					bind:value={howManyRounds}
					name="howManyRounds"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Option</option>
					<option value="2">2</option>
					<option value="4">4</option>
					<option value="6">6</option>
					<option value="8">8</option>
					<option value="10">10</option>
					<option value="12">12</option>
					<option value="14">14</option>
					<option value="16">16</option>
					<option value="more">More</option>
				</select>
			</div>
			<div class="col-span-full">
				<label for="chantingTimeline" class="block mb-2 text-sm text-white "
					>Since how long have you been chanting the Mahamantra?
				</label>
				<select
					bind:value={chantingTimeline}
					name="chantingTimeline"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Option</option>
					<option value="<1 year">{'<1 year'}</option>
					<option value="1-3 years">{'1-3 years'}</option>
					<option value="3-5 years">3-5 years </option>
					<option value=">5 years">{'>5 years'}</option>
					<option value=">10 years">{'>10 years'}</option>
				</select>
			</div>
		{/if}
		<div class="col-span-full">
			<label for="areYouInvolved" class="block mb-2 text-sm text-white "
				>Are you involved in ISKCON activities?
			</label>
			<select
				bind:value={areYouInvolved}
				name="areYouInvolved"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="planning">Planning to be involved</option>
			</select>
		</div>
		<div class="col-span-full">
			<label for="attendFestivals" class="block mb-2 text-sm text-white "
				>Attendance or service at temple activities or festivals
			</label>
			<select
				bind:value={attendFestivals}
				name="attendFestivals"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="planning">Planning to serve or attend</option>
			</select>
		</div>

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Initiation Status
		</h1>
		<div class="col-span-full">
			<label for="areYouInitiated" class="block mb-2 text-sm text-white "
				>Have you been initiated by a Spiritual Master?
			</label>
			<select
				bind:value={areYouInitiated}
				name="areYouInitiated"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="not yet">Not Yet</option>
				<option value="dont want">Dont want to be initiated</option>
			</select>
		</div>
		{#if areYouInitiated === 'yes'}
			<div class="col-span-full">
				<label for="initiatedName" class="block mb-2 text-sm text-white "
					>Initiated name
				</label>
				<input
					bind:value={initiatedName}
					type="text"
					name="initiatedName"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>

			<div class="col-span-full">
				<label for="initiationGuru" class="block mb-2 text-sm text-white "
					>Name of the Spiritual Master
				</label>
				<input
					bind:value={initiationGuru}
					type="text"
					name="initiationGuru"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		{#if areYouInitiated === 'not yet'}
			<div class="col-span-full">
				<label
					for="aspiringtobeInitiated"
					class="block mb-2 text-sm text-white "
					>Aspiring to be initiated by:
				</label>
				<input
					bind:value={aspiringtobeInitiated}
					type="text"
					name="aspiringtobeInitiated"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Familiarity with ISKCON Philosophy
		</h1>

		<div class="col-span-full">
			<label for="bhagwatam_knowledge" class="block mb-2 text-sm text-white "
				>Understanding and acceptance of the teachings of Srila Prabhupada
			</label>
			<select
				bind:value={bhagwatam_knowledge}
				name="bhagwatam_knowledge"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Completely Understand and Accept">Completely Understand and Accept</option>
				<option value="Partially Understand and Accept">Partially Understand and Accept</option>
				<option value="Completely Understand and Do Not Accept"
					>Completely Understand and Do Not Accept</option
				>
				<option value="Partially Understand and Do Not Accept"
					>Partially Understand and Do Not Accept</option
				>
				<option value="Do Not Understand">Do Not Understand</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="read_prabhupad_books" class="block mb-2 text-sm text-white "
				>Do you read the Bhagavad Gita/Bhagvatam/Srila Prabhupad's books?
			</label>
			<select
				bind:value={read_prabhupad_books}
				name="read_prabhupad_books"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</div>

		{#if read_prabhupad_books === 'yes'}
			<div class="col-span-full">
				<label for="prabhupad_books" class="block mb-2 text-lg text-gray-600 dark:text-gray-200"
					>Which of Srila Prabhupad's books have you read?</label
				>

				{#each books as value}
					<label class="text-base flex gap-4 text-gray-600 dark:text-gray-200">
						<input
							type="checkbox"
							bind:group={prabhupad_books}
							name="prabhupad_books"
							{value}
							class="block text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg"
						/>
						{value}
					</label>
				{/each}
			</div>
		{/if}

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Dietary Preferences
		</h1>

		<div class="col-span-full">
			<label for="diet_pref" class="block mb-2 text-sm text-white "
				>Food Choices</label
			>
			<select
				bind:value={diet_pref}
				name="diet_pref"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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

		{#if diet_pref === 'others'}
			<div class="col-span-full">
				<label for="other_diet_pref" class="block mb-2 text-sm text-white "
					>Please specify your dietary preferences
				</label>
				<input
					bind:value={other_diet_pref}
					type="text"
					name="other_diet_pref"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		<div class="col-span-full">
			<label for="diet_prasadam" class="block mb-2 text-sm text-white "
				>Observance of the prasadam (sanctified food) distribution system
			</label>
			<select
				bind:value={diet_prasadam}
				name="diet_prasadam"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Strictly Observe Prasadam">Strictly Observe Prasadam</option>
				<option value="Occasionally Observe Prasadam">Occasionally Observe Prasadam</option>
				<option value="Only at the temple">Only at the temple</option>
				<option value="Not Familiar With Prasadam System">Not Familiar With Prasadam System</option>
			</select>
		</div>

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Spiritual Values and Lifestyle
		</h1>

		<div class="col-span-full">
			<label for="committment_spiritual" class="block mb-2 text-sm text-white "
				>Commitment to living a spiritually conscious life
			</label>
			<select
				bind:value={committment_spiritual}
				name="committment_spiritual"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Fully Committed">Fully Committed</option>
				<option value="Mostly Committed">Mostly Committed</option>
				<option value="Somewhat Committed">Somewhat Committed</option>
				<option value="Not Committed">Not Committed</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="adherence_principles" class="block mb-2 text-sm text-white "
				>Adherence to the four regulative principles: no meat eating. no gambling, no illicit sex,
				no intoxication
			</label>
			<select
				bind:value={adherence_principles}
				name="adherence_principles"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Strictly Adhere to All Four Principles"
					>Strictly Adhere to All Four Principles</option
				>
				<option value="Adhere to Some of the Principles">Adhere to Some of the Principles</option>
				<option value="Occasionally Follow the Principles"
					>Occasionally Follow the Principles</option
				>
				<option value="Do Not Follow Any of the Principles"
					>Do Not Follow Any of the Principles</option
				>
			</select>
		</div>

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Connection to ISKCON Community
		</h1>

		<div class="col-span-full">
			<label for="involvement" class="block mb-2 text-sm text-white "
				>Involvement in local ISKCON temple or community
			</label>
			<select
				bind:value={involvement}
				name="involvement"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Actively Involved">Actively Involved</option>
				<option value="Moderately Involved">Moderately Involved</option>
				<option value="Occasionally Involved">Occasionally Involved</option>
				<option value="Not Involved">Not Involved</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="participation" class="block mb-2 text-sm text-white "
				>Participation in devotee association or study groups
			</label>
			<select
				bind:value={participation}
				name="participation"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Actively Participate">Actively Participate</option>
				<option value="Occasionally Participate">Occasionally Participate</option>
				<option value="Interested but Haven't Participated Yet"
					>Interested but Haven't Participated Yet</option
				>
				<option value="Not Interested">Not Interested</option>
				<option value="Not Aware of Such Group">Not Aware of Such Group</option>
			</select>
		</div>

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Service and Seva
		</h1>

		<div class="col-span-full">
			<label
				for="willingness_for_service"
				class="block mb-2 text-sm text-white "
				>Willingness to engage in devotional service or seva within the ISKCON community
			</label>
			<select
				bind:value={willingness_for_service}
				name="willingness_for_service"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Willing and Actively Engaged in Seva"
					>Willing and Actively Engaged in Seva</option
				>
				<option value="Willing but Not Yet Engaged in Seva"
					>Willing but Not Yet Engaged in Seva</option
				>
				<option value="Unsure or Undecided about Engaging in Seva"
					>Unsure or Undecided about Engaging in Seva</option
				>
				<option value="Not Willing to Engage in Seva">Not Willing to Engage in Seva</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="service_interests" class="block mb-2 text-sm text-white "
				>Interest in specific areas of service, such as deity worship, book distribution, or
				outreach programs
			</label>
			<select
				bind:value={service_interests}
				name="service_interests"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Interested and Actively Involved">Interested and Actively Involved</option>
				<option value="Interested but Not Actively Involved Yet"
					>Interested but Not Actively Involved Yet</option
				>
				<option value="Open to Any Service Provided">Open to Any Service Provided</option>
				<option value="Not Interested in Any Specific Areas of Service"
					>Not Interested in Any Specific Areas of Service</option
				>
			</select>
		</div>

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Cultural Backgrund
		</h1>

		<div class="col-span-full">
			<label for="connection_culture" class="block mb-2 text-sm text-white "
				>Connection to Vaishnava culture
			</label>
			<select
				bind:value={connection_culture}
				name="connection_culture"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="North Indian Vaishnav">North Indian Vaishnav</option>
				<option value="South Indian Vaishnav">South Indian Vaishnav</option>
				<option value="East Indian Vaishnav">East Indian Vaishnav</option>
				<option value="West Indian Vaishnav">West Indian Vaishnav</option>
				<option value="Vaishnav Irrespective of Location">Vaishnav Irrespective of Location</option>
				<option value="Not connected to Vaishnava culture"
					>Not connected to Vaishnava culture</option
				>
				<option value="others">Others</option>
			</select>
		</div>

		{#if connection_culture === 'others'}
			<div class="mt-2 col-span-full">
				<label
					for="other_connection_culture"
					class="block mb-2 text-sm text-white "
					>Please specify about your culture</label
				>
				<input
					bind:value={other_connection_culture}
					type="text"
					name="other_connection_culture"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		<div class="col-span-full">
			<label for="understanding_iskcon" class="block mb-2 text-sm text-white "
				>Understanding and appreciation of traditional ISKCON customs and etiquette
			</label>
			<select
				bind:value={understanding_iskcon}
				name="understanding_iskcon"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Deep Understanding and Strict Adherence"
					>Deep Understanding and Strict Adherence</option
				>
				<option value="Deep Understanding and Some Adherence"
					>Deep Understanding and Some Adherence</option
				>
				<option value="Moderate Understanding and Strict Adherence"
					>Moderate Understanding and Strict Adherence</option
				>
				<option value="Moderate Understanding and Some Adherence"
					>Moderate Understanding and Some Adherence</option
				>
				<option value="Familiar with Customs and Etiquette but Not Strictly Adherent"
					>Familiar with Customs and Etiquette but Not Strictly Adherent</option
				>
				<option value="Not Familiar with Customs and Etiquette"
					>Not Familiar with Customs and Etiquette</option
				>
			</select>
		</div>

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Personal commitment to Marriage and Family Life
		</h1>

		<div class="col-span-full">
			<label for="committment_readiness" class="block mb-2 text-sm text-white "
				>Readiness for a lifelong commitment to marriage and family in accordnace with ISKCON values
			</label>
			<select
				bind:value={committment_readiness}
				name="committment_readiness"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Fully Ready and Committed">Fully Ready and Committed</option>
				<option value="Mostly Ready and Committed">Mostly Ready and Committed</option>
				<option value="Considering it but Unsure">Considering it but Unsure</option>
				<option value="Not Ready or Committed">Not Ready or Committed</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="children_willingness" class="block mb-2 text-sm text-white "
				>Willingness to raise children in a Krishna conscious environment
			</label>
			<select
				bind:value={children_willingness}
				name="children_willingness"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Completely Willing and Prepared">Completely Willing and Prepared</option>
				<option value="Willing but Need Guidance">Willing but Need Guidance</option>
				<option value="Considering it but Uncertain">Considering it but Uncertain</option>
				<option value="Not Willing to Raise Children in Such an Environment"
					>Not Willing to Raise Children in Such an Environment</option
				>
			</select>
		</div>

		{#if ['Completely Willing and Prepared', 'Willing but Need Guidance', 'Considering it but Uncertain'].includes(children_willingness)}
			<div class="col-span-full">
				<label for="children_education" class="block mb-2 text-sm text-white "
					>What are your preferences for your child's education?
				</label>
				<select
					bind:value={children_education}
					name="children_education"
					class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				>
					<option value="" selected disabled hidden>Select Option</option>
					<option value="Homeschooling">Homeschooling </option>
					<option value="ISKCON Gurukul">ISKCON Gurukul</option>
					<option value="Any other Spiritual Gurukul">Any other Spiritual Gurukul</option>
					<option value="Normal School">Normal School</option>
					<option value="Not Decided Yet">Not Decided Yet</option>
				</select>
			</div>
		{/if}
	{/if}

	<div class="col-span-full">
		<label
			for="willingness_support_each_other"
			class="block mb-2 text-sm text-white "
			>Willingess to support and participate in each other's spiritual growth</label
		>
		<select
			bind:value={willingness_support_each_other}
			name="willingness_support_each_other"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Yes">Yes</option>
			<option value="No">No</option>
			<option value="Not Sure">Not Sure</option>
		</select>
	</div>
	<div class="col-span-full">
		<label for="spiritualityImportance" class="block mb-2 text-sm text-white "
			>Importance of spirituality in your life
		</label>
		<select
			bind:value={spiritualityImportance}
			name="spiritualityImportance"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="High">High</option>
			<option value="Medium">Medium</option>
			<option value="Low">Low</option>
			<option value="Nil">Nil</option>
		</select>
	</div>
	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Spiritual Details</Button
	>
</form>
