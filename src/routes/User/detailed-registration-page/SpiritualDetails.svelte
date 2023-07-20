<script lang="ts">
	import { Button } from '$components/ui/button';
	import InitiationGuruComponent from './InitiationGuruComponent.svelte';
	import SpiritualOrgsComponent from './SpiritualOrgsComponent.svelte';
	let isAffiliated: boolean = false;
	let haveCounsellor: boolean = false;
	let counsellorName: string;
	let counsellorNumber: number;
	let spiritualOrgName: string;
	let otherOrgName: string;
	let doYouChant: string;
	let chantFreq: string;
	let howManyRounds: number | string;
	let chantingTimeline: string;
	let areYouInvolved: string;
	let attendFestivals: string;
	let areYouInitiated: string
	let spiritualityImportance: string
	let initiatedName: string
</script>

<form class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 place-items-center">
	<h1
		class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
	>
		Spiritual Details
	</h1>
	<div>
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
		<div>
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
		<div class="mt-2">
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
		<SpiritualOrgsComponent />
		<div>
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
			<div class="mt-2">
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
			<div class="mt-2">
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
			<InitiationGuruComponent />
		{/if}
		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
		>
			Devotional Practices
		</h1>
		<div>
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
			<div>
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

			<div>
				<label for="howManyRounds" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>How often do you chant the Hare Krishna Mahamantra?
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
			<div>
				<label for="chantingTimeline" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
					>Do you chant the Hare Krishna Mahamantra?
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
		<div>
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
		<div>
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
		<div>
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
				<option value="not yet">No Yet</option>
				<option value="dont want">Dont want to be initiated</option>
			</select>
		</div>
		{#if areYouInitiated==='yes'}
		<div>
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
		{/if}
	{/if}
	<div>
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
	<Button class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
	>Save Spiritual Details</Button
>
</form>
