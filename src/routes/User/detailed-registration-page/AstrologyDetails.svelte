<script lang="ts">
	import { Button } from '$components/ui/button';
	import { toast } from 'svoast';
	import { formData } from '../../../form_store';

	let manglik: string;
	let rashi: string;
	let horoscope_match: string;
	let astrology_compatibility: string;
	let consultation: string;
	let p_astrologer: string;
	let other_astrolger: string;

	function handleSubmit(event: any) {
		event.preventDefault();

		// Collect form data
		const astrologyData = {
			manglik,
			rashi,
			horoscope_match,
			astrology_compatibility,
			consultation,
			p_astrologer,
			other_astrolger
		};

		// Update the formData store with astrologyData
		formData.update((data) => ({ ...data, astrology_details: astrologyData }));

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
		Astrology Details
	</h1>

	<div class="col-span-full">
		<label for="manglik" class="block mb-2 text-sm text-white "
			>Are you Manglik?</label
		>
		<select
			bind:value={manglik}
			name="manglik"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Yes">Yes</option>
			<option value="No">No</option>
			<option value="Not Sure">Not Sure</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="rashi" class="block mb-2 text-sm text-white ">Rashi</label>
		<select
			bind:value={rashi}
			name="rashi"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Mesh">Mesh</option>
			<option value="Karka">Karka</option>
			<option value="Tula">Tula</option>
			<option value="Makar">Makar</option>
			<option value="Vrisabh">Vrisabh</option>
			<option value="Simha">Simha</option>
			<option value="Vrishchik">Vrishchik</option>
			<option value="Kumbha">Kumbha</option>
			<option value="Mithuna">Mithuna</option>
			<option value="Kanya">Kanya</option>
			<option value="Dhanu">Dhanu</option>
			<option value="Meen">Meen</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="horoscope_match" class="block mb-2 text-sm text-white "
			>Horoscope Match (Kundali Matching)</label
		>
		<select
			bind:value={horoscope_match}
			name="horoscope_match"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="Important for me">Important for me</option>
			<option value="Preferable but not essential">Preferable but not essential</option>
			<option value="Not important to me">Not important to me</option>
		</select>
	</div>

	<div class="col-span-full">
		<label for="astrology_compatibility" class="block mb-2 text-sm text-white "
			>Astrological Compatibility</label
		>
		<select
			bind:value={astrology_compatibility}
			name="astrology_compatibility"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="It's Important for Me to Consider Astrological Compatibility"
				>It's Important for Me to Consider Astrological Compatibility</option
			>
			<option value="I Consider It to Some Extent, but It's Not a Major Factor"
				>I Consider It to Some Extent, but It's Not a Major Factor</option
			>
			<option value="Astrological Compatibility is Not Important to Me"
				>Astrological Compatibility is Not Important to Me</option
			>
		</select>
	</div>

	<div class="col-span-full">
		<label for="consultation" class="block mb-2 text-sm text-white "
			>Astrological Consultation</label
		>
		<select
			bind:value={consultation}
			name="consultation"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="I Seek Astrological Consultation Regularly"
				>I Seek Astrological Consultation Regularly</option
			>
			<option value="I Seek Astrological Consultation Occasionally"
				>I Seek Astrological Consultation Occasionally</option
			>
			<option value="I Don't Seek Astrological Consultation"
				>I Don't Seek Astrological Consultation</option
			>
		</select>
	</div>

	<div class="col-span-full">
		<label for="p_astrologer" class="block mb-2 text-sm text-white "
			>Preferred Astrologer</label
		>
		<select
			bind:value={p_astrologer}
			name="p_astrologer"
			class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
		>
			<option value="" selected disabled hidden>Select Option</option>
			<option value="I Have a Preferred Astrologer/Method"
				>I Have a Preferred Astrologer/Method (Please specify)</option
			>
			<option value="No Specific Preference">No Specific Preference</option>
		</select>
	</div>

	{#if p_astrologer === 'I Have a Preferred Astrologer/Method'}
		<div class="col-span-full">
			<label for="other_astrolger" class="block mb-2 text-sm text-white "
				>Please specify the name of you Preferred Astrologer</label
			>
			<input
				type="text"
				bind:value={other_astrolger}
				name="other_astrolger"
				class="block w-full px-5 py-3 mt-2   bg-white border border-gray-200 rounded-lg  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	{/if}

	{#if p_astrologer === 'No Specific Preference'}
		<h1
			class="text-xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider capitalize text-white"
		>
			Stay Tuned! we soon will be starting our own Astrology Consultation Services!
		</h1>
	{/if}
	<Button
		type="submit"
		class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
		>Save Astrology Details</Button
	>
</form>
