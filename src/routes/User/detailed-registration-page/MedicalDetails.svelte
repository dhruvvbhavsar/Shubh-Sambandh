<script>
	import { Button } from '$components/ui/button';
	import { diseases } from './options';
	let currentMedicalCondition = false;
	let currentMedicalInfo = '';
	let previousMedicalCondition = false;
	let previousMedicalInfo = '';
	let takingMedicine = false;
</script>

<form class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 place-items-center">
	<h1
		class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
	>
		Medical Details
	</h1>
	<div>
		<label for="disease" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Do you have any pre-existing medical disease?</label
		>
		<select
			bind:value={currentMedicalCondition}
			name="disease"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value={true}>Yes</option>
			<option value={false}>No</option>
		</select>
	</div>

	{#if currentMedicalCondition}
		<div>
			<label for="medicalConditions" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please select from the below list any condtion/allergies that apply to you</label
			>
			<select
				bind:value={currentMedicalInfo}
				name="bloodGroup"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="allergy">Allergies (please specify in the provided text box)</option>
				<option value="asthama">Asthma</option>
				<option value="cancer">Cancer (please specify in the provided text box)</option>
				<option value="chronic pain"
					>Chronic pain conditions (please specify in the provided text box)</option
				>
				<option value="diabetes">Diabetes</option>
				<option value="digestive disorders"
					>Digestive disorders (please specify in the provide text box)</option
				>
				<option value="epilepsy">Epilepsy</option>
				<option value="high blood pressure">High Blood Pressure </option>
				<option value="heart disease">Heart disease </option>
				<option value="mental health"
					>Mental health conditions (please specify in the provided text box)
				</option>
				<option value="thyroid disorders">Thyroid disorders</option>
				<option value="others">Others (please specify)</option>
			</select>
		</div>
	{/if}
	{#if diseases.includes(currentMedicalInfo) && currentMedicalCondition}
		<div class="mt-2">
			<label for="additionalMedicalInfo" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify about your {currentMedicalInfo} condition</label
			>
			<input
				type="text"
				name="additionalInfo"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	<div>
		<label for="disease" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Did you have any medical condition in the past that is now completely cured?</label
		>
		<select
			bind:value={previousMedicalCondition}
			name="disease"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value={true}>Yes</option>
			<option value={false}>No</option>
		</select>
	</div>

	{#if previousMedicalCondition}
		<div>
			<label for="medicalConditions" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please select from the below list any condtion/allergies that apply to you</label
			>
			<select
				bind:value={previousMedicalInfo}
				name="bloodGroup"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="allergy">Allergies (please specify in the provided text box)</option>
				<option value="asthama">Asthma</option>
				<option value="cancer">Cancer (please specify in the provided text box)</option>
				<option value="chronic pain"
					>Chronic pain conditions (please specify in the provided text box)</option
				>
				<option value="diabetes">Diabetes</option>
				<option value="digestive disorders"
					>Digestive disorders (please specify in the provide text box)</option
				>
				<option value="epilepsy">Epilepsy</option>
				<option value="high blood pressure">High Blood Pressure </option>
				<option value="heart disease">Heart disease </option>
				<option value="mental health"
					>Mental health conditions (please specify in the provided text box)
				</option>
				<option value="thyroid disorders">Thyroid disorders</option>
				<option value="others">Others (please specify)</option>
			</select>
		</div>
	{/if}
	{#if diseases.includes(previousMedicalInfo) && previousMedicalCondition}
		<div class="mt-2">
			<label for="additionalMedicalInfo" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify about your {previousMedicalInfo} condition</label
			>
			<input
				type="text"
				name="additionalInfo"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	<div>
		<label for="takingMedicine" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Are you currently taking any medications for the treatment/management of any disease?</label
		>
		<select
			bind:value={takingMedicine}
			name="disease"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value={true}>Yes</option>
			<option value={false}>No</option>
		</select>
	</div>

	{#if takingMedicine}
		<div>
			<label
				for="takingMedicineForHowLong"
				class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>How long have you been taking these medications?</label
			>
			<select
				name="medicineIntakeDuration"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="<3 months">{'<3 months'}</option>
				<option value="3-6 months">{'3-6 months'}</option>
				<option value="6-12 months">{'6-12 months'}</option>
				<option value=">1 year">{'>1 year'}</option>
				<option value=">3 years">{'>3 years'}</option>
				<option value=">5 years">{'>5 years'}</option>
			</select>
		</div>
	{/if}
	<Button class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Medical Details</Button
	>
</form>
