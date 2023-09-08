<script lang="ts">
	import { Button } from '$components/ui/button';
	import { formData } from '../../../form_store';

	let family_type: string;
	let own_house: string;
	let housing_status: string;
	let other_housing_status: string;
	let family_value: string;
	let other_family_value: string;
	let father_name: string;
	let father_status: string;
	let other_father_status: string;
	let mother_name: string;
	let mother_status: string;
	let other_mother_status: string;
	let have_siblings: string;
	let how_many_siblings: string;
	let family_devotional_details: string;

	function handleSubmit(event: any) {
		event.preventDefault();

		// Collect form data
		const familyData = {
			family_type,
			own_house,
			housing_status,
			other_housing_status,
			family_value,
			other_family_value,
			father_name,
			father_status,
			other_father_status,
			mother_name,
			mother_status,
			other_mother_status,
			have_siblings,
			how_many_siblings,
			family_devotional_details
		};

		// Update the formData store with familyData
		formData.update((data) => ({ ...data, family_details: familyData }));

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
		Family Details
	</h1>
	<div class="col-span-full">
		<label for="family_type" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Family Type</label
		>
		<select
			bind:value={family_type}
			name="family_type"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Joint Family">Joint Family</option>
			<option value="Nuclear Family">Nuclear Family</option>
			<option value="Extended Family">Extended Family</option>
			<option value="Alone/Independent">Alone/Independent</option>
		</select>
	</div>
	<div class="col-span-full">
		<label for="own_house" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Do you own your own house?</label
		>
		<select
			bind:value={own_house}
			name="own_house"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="yes">Yes</option>
			<option value="no">No</option>
			<option value="doesn't matter">Doesn't Matter</option>
		</select>
	</div>
	{#if own_house === 'no'}
		<div class="col-span-full">
			<label for="housing_status" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Current Housing Status</label
			>
			<select
				bind:value={housing_status}
				name="housing_status"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="Rented Apartment/House">Rented Apartment/House</option>
				<option value="Living in Company Provided Accommodation"
					>Living in Company Provided Accommodation</option
				>
				<option value="Paying Guest">Paying Guest</option>
				<option value="others">Others</option>
			</select>
		</div>
		{#if housing_status === 'others'}
			<div class="col-span-full">
				<label
					for="other_housing_status"
					class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Current Housing Status</label
				>
				<input
					bind:value={other_housing_status}
					type="text"
					name="other_housing_status"
					placeholder="Enter your current housing status"
					class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</div>
		{/if}
	{/if}
	<div class="col-span-full">
		<label for="family_value" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Family Values</label
		>
		<select
			bind:value={family_value}
			name="family_value"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Traditional and Conservative">Traditional and Conservative</option>
			<option value="Modern and Open-minded">Modern and Open-minded</option>
			<option value="Balanced mix of Traditional and Modern Values"
				>Balanced mix of Traditional and Modern Values</option
			>
			<option value="others">Others</option>
		</select>
	</div>
	{#if family_value === 'others'}
		<div class="col-span-full">
			<label for="other_family_value" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify</label
			>
			<input
				type="text"
				bind:value={other_family_value}
				name="other_family_value"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}
	<div class="col-span-full">
		<label for="father_name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Father's name</label
		>
		<input
			type="text"
			bind:value={father_name}
			name="father_name"
			class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		/>
	</div>
	<div class="col-span-full">
		<label for="father_status" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Father's Status and Occupation</label
		>
		<select
			bind:value={father_status}
			name="father_status"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Retired">Retired</option>
			<option value="Not staying with us">Not staying with us</option>
			<option value="Working">Working (Please specify the occupation briefly)</option>
			<option value="Self-employed">Self-employed (Please specify the occupation briefly)</option>
			<option value="Business owner"
				>Business owner (Please specify the type of business briefly)</option
			>
			<option value="Deceased">Deceased</option>
		</select>
	</div>
	{#if father_status === 'Working' || father_status === 'Self-employed' || father_status === 'Business owner'}
		<div class="col-span-full">
			<label for="father_occupation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify</label
			>
			<input
				type="text"
				bind:value={other_father_status}
				name="father_status"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	<div class="col-span-full">
		<label for="mother_name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Mother's name</label
		>
		<input
			type="text"
			bind:value={mother_name}
			name="mother_name"
			class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		/>
	</div>
	<div class="col-span-full">
		<label for="mother_status" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Mother's Status and Occupation</label
		>
		<select
			bind:value={mother_status}
			name="mother_status"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Retired">Retired</option>
			<option value="Not staying with us">Not staying with us</option>
			<option value="Housewife">Housewife</option>
			<option value="Working">Working (Please specify the occupation briefly)</option>
			<option value="Self-employed">Self-employed (Please specify the occupation briefly)</option>
			<option value="Business owner"
				>Business owner (Please specify the type of business briefly)</option
			>
			<option value="Deceased">Deceased</option>
		</select>
	</div>
	{#if mother_status === 'Working' || mother_status === 'Self-employed' || mother_status === 'Business owner'}
		<div class="col-span-full">
			<label for="mother_occupation" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify</label
			>
			<input
				type="text"
				bind:value={other_mother_status}
				name="mother_status"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}
	<div class="col-span-full">
		<label for="have_siblings" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Do you have siblings?</label
		>
		<select
			bind:value={have_siblings}
			name="have_siblings"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Yes">Yes</option>
			<option value="No">No</option>
		</select>
	</div>
	{#if have_siblings === 'Yes'}
		<div class="col-span-full">
			<label for="how_many_siblings" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>How many?</label
			>
			<select
				bind:value={how_many_siblings}
				name="how_many_siblings"
				class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			>
				<option value="" selected disabled hidden>Select Option</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value=">5">{'>5'}</option>
			</select>
		</div>
	{/if}
	<div class="col-span-full">
		<label
			for="family_devotional_details"
			class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Devotional details of family members</label
		>
		<select
			bind:value={family_devotional_details}
			name="family_devotional_details"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Strongly Devotional">Strongly Devotional</option>
			<option value="Moderately Devotional">Moderately Devotional</option>
			<option value="Occasionally Participate">Occasionally Participate</option>
			<option value="Not Devotional">Not Devotional</option>
		</select>
	</div>
	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Family Details</Button
	>
</form>
