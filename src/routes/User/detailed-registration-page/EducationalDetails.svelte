<script lang="ts">
	import { Button } from '$components/ui/button';
	import { formData } from '../../../form_store';

	let qualification: string;
	let other_qualification: string;

	function handleSubmit(event: any) {
    event.preventDefault();

    // Collect form data
    const educationalData = {
      qualification,
      other_qualification,
    };

    // Update the formData store with educationalData
    formData.update(data => ({ ...data, educational_details: educationalData }));

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
		Educational Details
	</h1>

	<div class="col-span-full">
		<label for="qualification" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
			>Highest Qualification</label
		>
		<select
			bind:value={qualification}
			name="qualification"
			class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Lower Primary (Class I-V)">Lower Primary (Class I-V)</option>
			<option value="Middle/Higher Primary (Class VI-VIII)"
				>Middle/Higher Primary (Class VI-VIII)</option
			>
			<option value="Secondary (Class IX-X)">Secondary (Class IX-X)</option>
			<option value="Senior Secondary (Class XII)">Senior Secondary (Class XII)</option>
			<option value="Diploma">Diploma</option>
			<option value="Graduate">Graduate</option>
			<option value="PG Diploma">PG Diploma</option>
			<option value="Post Graduate">Post Graduate</option>
			<option value="Doctorate">Doctorate</option>
			<option value="Post Doctorate">Post Doctorate</option>
			<option value="Illiterate">Illiterate</option>
			<option value="others">Others</option>
		</select>
	</div>
	{#if qualification === 'others'}
		<div class="col-span-full">
			<label for="others_qualification" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
				>Please specify</label
			>
			<input
				type="text"
				bind:value={other_qualification}
				name="others_qualification"
				class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Educational Details</Button
	>
</form>
