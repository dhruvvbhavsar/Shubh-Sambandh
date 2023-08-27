<script lang="ts">
	import { Button } from '$components/ui/button';
	import { formData } from '../../../form_store';
	import InitiationGuruComponent from './InitiationGuruComponent.svelte';
	import SpiritualOrgsComponent from './SpiritualOrgsComponent.svelte';
	let isAffiliated: boolean = false;

	let templeLocation: any;
	let haveCounsellor: boolean = false;
	let counsellorName: string;
	let counsellorNumber: number;
	let counsellorInitiationGuru: any;
	let spiritualOrgName: string;
	let otherOrgName: string;
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

	let understanding_prabhupad: string;
	let bhagwatam_knowledge: string;

	let diet_pref: string;
	let diet_prasadam: string;

	let committment_spiritual: string;
	let adherence_principles: string;

	let involvement: string;
	let participation: string;

	let willingness_for_service: string;
	let service_interests: string;

	let connection_culture: string;
	let understanding_iskcon: string;

	let committment_readiness: string;
	let children_willingness: string;

	function handleSubmit(event: any) {
		event.preventDefault();

		// Collect form data
		const spiritualData = {
			isAffiliated,
			templeLocation,
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
			understanding_prabhupad,
			bhagwatam_knowledge,
			diet_pref,
			diet_prasadam,
			committment_spiritual,
			adherence_principles,
			involvement,
			participation,
			willingness_for_service,
			service_interests,
			connection_culture,
			understanding_iskcon,
			committment_readiness,
			children_willingness
		};

		// Update the formData store with spiritualData
		formData.update((data) => ({ ...data, spiritual_details: spiritualData }));

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
		Spiritual Details
	</h1>
	<div class="col-span-full">
		<label for="religious-affiliation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Do you a religious affiliation with any spiritual organization?</label
		>
		<select
			bind:value={isAffiliated}
			name="religious-affiliation"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value={true}>Yes</option>
			<option value={false}>No</option>
		</select>
	</div>

	{#if isAffiliated}
		<div class="col-span-full">
			<label for="spiritualOrgName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Which spiritual organization are you connected to?
			</label>
			<select
				bind:value={spiritualOrgName}
				name="bloodGroup"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="ISKCON">ISKCON</option>
				<option value="others">Other(please specify)</option>
			</select>
		</div>
	{/if}
	{#if spiritualOrgName === 'others' && isAffiliated}
		<div class="mt-2 col-span-full">
			<label for="otherOrgName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify about the spiritual organisation you are connected to</label
			>
			<input
				bind:value={otherOrgName}
				type="text"
				name="otherOrgName"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	{#if spiritualOrgName === 'ISKCON' && isAffiliated}
		<h1
			class="text-3xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			For ISKCON Devotees
		</h1>
		<SpiritualOrgsComponent bind:value={templeLocation} />
		<div class="col-span-full">
			<label for="religious-affiliation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Do you have a counsellor?</label
			>
			<select
				bind:value={haveCounsellor}
				name="religious-affiliation"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value={true}>Yes</option>
				<option value={false}>No</option>
			</select>
		</div>
		{#if haveCounsellor}
			<div class="mt-2 col-span-full">
				<label for="counsellorName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Name of your counsellor</label
				>
				<input
					bind:value={counsellorName}
					type="text"
					name="counsellorName"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
			<div class="mt-2 col-span-full">
				<label for="counsellorNumber" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Contact number of your counsellor</label
				>
				<input
					bind:value={counsellorNumber}
					type="text"
					name="counsellorNumber"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
			<InitiationGuruComponent bind:value={counsellorInitiationGuru} />
		{/if}

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Devotional Practices
		</h1>
		<div class="col-span-full">
			<label for="doYouChant" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Do you chant the Hare Krishna Mahamantra?
			</label>
			<select
				bind:value={doYouChant}
				name="doYouChant"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="planning">Planning to Start</option>
			</select>
		</div>
		{#if doYouChant === 'yes'}
			<div class="col-span-full">
				<label for="chantFreq" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>How often do you chant the Hare Krishna Mahamantra?
				</label>
				<select
					bind:value={chantFreq}
					name="chantFreq"
					class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
				<label for="howManyRounds" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>How many rounds of the Hare Krishna Mahamantra do you chant?
				</label>
				<select
					bind:value={howManyRounds}
					name="howManyRounds"
					class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
				<label for="chantingTimeline" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Since how long have you been chanting the Mahamantra?
				</label>
				<select
					bind:value={chantingTimeline}
					name="chantingTimeline"
					class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="areYouInvolved" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Are you involved in ISKCON activities?
			</label>
			<select
				bind:value={areYouInvolved}
				name="areYouInvolved"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="planning">Planning to be involved</option>
			</select>
		</div>
		<div class="col-span-full">
			<label for="attendFestivals" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Attendance or service at temple activities or festivals
			</label>
			<select
				bind:value={attendFestivals}
				name="attendFestivals"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="areYouInitiated" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Have you been initiated by a Spiritual Master?
			</label>
			<select
				bind:value={areYouInitiated}
				name="areYouInitiated"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="yes">Yes</option>
				<option value="not yet">Not Yet</option>
				<option value="dont want">Dont want to be initiated</option>
			</select>
		</div>
		{#if areYouInitiated === 'yes'}
			<div class="col-span-full">
				<label for="initiatedName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Initiated name
				</label>
				<input
					bind:value={initiatedName}
					type="text"
					name="initiatedName"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>

			<div class="col-span-full">
				<label for="initiationGuru" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Name of the Initiation Guru
				</label>
				<input
					bind:value={initiationGuru}
					type="text"
					name="initiationGuru"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		{#if areYouInitiated === 'not yet'}
			<div class="col-span-full">
				<label
					for="aspiringtobeInitiated"
					class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Aspiring to be initiated by:
				</label>
				<input
					bind:value={aspiringtobeInitiated}
					type="text"
					name="aspiringtobeInitiated"
					class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Familiarity with ISKCON Philosophy
		</h1>

		<div class="col-span-full">
			<label
				for="understanding_prabhupad"
				class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Understanding and acceptance of the teachings of Srila Prabhupada
			</label>
			<select
				bind:value={understanding_prabhupad}
				name="understanding_prabhupad"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="bhagwatam_knowledge" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Knowledge of the Bhagvad Gita and Srimad Bhagvatam
			</label>
			<select
				bind:value={bhagwatam_knowledge}
				name="bhagwatam_knowledge"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Advanced Knowledge">Advanced Knowledge</option>
				<option value="Intermediate Knowledge">Intermediate Knowledge</option>
				<option value="Basic Knowledge">Basic Knowledge</option>
				<option value="No Knowledge">No Knowledge</option>
			</select>
		</div>

		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Dietary Preferences
		</h1>

		<div class="col-span-full">
			<label for="diet_pref" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Vegetarian or vegan (avoidance of meat, fish, eggs)
			</label>
			<select
				bind:value={diet_pref}
				name="diet_pref"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Strictly Vegetarian or Vegan">Strictly Vegetarian or Vegan</option>
				<option value="Mostly Vegetarian or Vegan">Mostly Vegetarian or Vegan</option>
				<option value="Occasionally Non-Vegetarian">Occasionally Non-Vegetarian</option>
				<option value="Regularly Consume Meat, Fish, and Eggs"
					>Regularly Consume Meat, Fish, and Eggs</option
				>
			</select>
		</div>

		<div class="col-span-full">
			<label for="diet_prasadam" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Observance of the prasadam (sanctified food) distribution system
			</label>
			<select
				bind:value={diet_prasadam}
				name="diet_prasadam"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="committment_spiritual" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Commitment to living a spiritually conscious life
			</label>
			<select
				bind:value={committment_spiritual}
				name="committment_spiritual"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Fully Committed">Fully Committed</option>
				<option value="Mostly Committed">Mostly Committed</option>
				<option value="Somewhat Committed">Somewhat Committed</option>
				<option value="Not Committed">Not Committed</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="adherence_principles" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Adherence to the four regulative principles: no meat eating. no gambling, no illicit sex,
				no intoxication
			</label>
			<select
				bind:value={adherence_principles}
				name="adherence_principles"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="involvement" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Involvement in local ISKCON temple or community
			</label>
			<select
				bind:value={involvement}
				name="involvement"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Actively Involved">Actively Involved</option>
				<option value="Moderately Involved">Moderately Involved</option>
				<option value="Occasionally Involved">Occasionally Involved</option>
				<option value="Not Involved">Not Involved</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="participation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Participation in devotee association or study groups
			</label>
			<select
				bind:value={participation}
				name="participation"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
				class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Willingness to engage in devotional service or seva within the ISKCON community
			</label>
			<select
				bind:value={willingness_for_service}
				name="willingness_for_service"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="service_interests" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Interest in specific areas of service, such as deity worship, book distribution, or
				outreach programs
			</label>
			<select
				bind:value={service_interests}
				name="service_interests"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Interested and Actively Involved">Interested and Actively Involved</option>
				<option value="Interested but Not Actively Involved Yet"
					>Interested but Not Actively Involved Yet</option
				>
				<option value="Not Sure about Specific Areas of Service"
					>Not Sure about Specific Areas of Service</option
				>
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
			<label for="connection_culture" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Connection to Vaishnava culture
			</label>
			<select
				bind:value={connection_culture}
				name="connection_culture"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Strong Connection and Active Involvement"
					>Strong Connection and Active Involvement</option
				>
				<option value="Moderate Connection and Involvement"
					>Moderate Connection and Involvement</option
				>
				<option value="Familiar with Vaishnava Culture but Not Actively Involved"
					>Familiar with Vaishnava Culture but Not Actively Involved</option
				>
				<option value="Not Familiar with Vaishnava Culture"
					>Not Familiar with Vaishnava Culture</option
				>
			</select>
		</div>

		<div class="col-span-full">
			<label for="understanding_iskcon" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Understanding and appreciation of traditional ISKCON customs and etiquette
			</label>
			<select
				bind:value={understanding_iskcon}
				name="understanding_iskcon"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
			<label for="committment_readiness" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Readiness for a lifelong commitment to marriage and family in accordnace with ISKCON values
			</label>
			<select
				bind:value={committment_readiness}
				name="committment_readiness"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Fully Ready and Committed">Fully Ready and Committed</option>
				<option value="Mostly Ready and Committed">Mostly Ready and Committed</option>
				<option value="Considering it but Unsure">Considering it but Unsure</option>
				<option value="Not Ready or Committed">Not Ready or Committed</option>
			</select>
		</div>

		<div class="col-span-full">
			<label for="children_willingness" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Willingness to raise children in a Krishna conscious environment
			</label>
			<select
				bind:value={children_willingness}
				name="children_willingness"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Completely Willing and Prepared">Completely Willing and Prepared</option>
				<option value="Willing but Need Guidance*">Willing but Need Guidance*</option>
				<option value="Considering it but Uncertain">Considering it but Uncertain</option>
				<option value="Not Willing to Raise Children in Such an Environment"
					>Not Willing to Raise Children in Such an Environment</option
				>
			</select>
		</div>
	{/if}
	<div class="col-span-full">
		<label for="spiritualityImportance" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Importance of spirituality in your life
		</label>
		<select
			bind:value={spiritualityImportance}
			name="spiritualityImportance"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
