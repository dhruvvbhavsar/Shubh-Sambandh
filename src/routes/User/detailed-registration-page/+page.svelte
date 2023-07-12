<script lang="ts">
	import { createTagsInput } from '@melt-ui/svelte';
	import { X } from 'lucide-svelte';
	import { sportsList, diseases } from './options';
	import MultiSelect from 'svelte-multiselect';
	import LanguageSlot from './LanguageSlot.svelte';
	import { Textarea } from '$components/ui/textarea';
	import { Button } from '$components/ui/button';
	import Select from 'svelte-select';

	const { root, input, tags, tag, deleteTrigger } = createTagsInput({
		tags: ['Movies', 'Gardening', 'Adventure Parks']
	});
	let diet: string;
	let otherDiet: string;
	let selected: string[];

	let filterText = '';

	let value: any = null;

	let items = sportsList;

	function handleFilter(e: any) {
		if (value?.find((i) => i.label === filterText)) return;
		if (e.detail.length === 0 && filterText.length > 0) {
			const prev = items.filter((i) => !i.created);
			items = [...prev, { value: filterText, label: filterText, created: true }];
		}
	}

	function handleChange(e) {
		items = items.map((i) => {
			delete i.created;
			return i;
		});
	}

	let currentMedicalCondition = false;
	let currentMedicalInfo = '';
	let previousMedicalCondition = false;
	let previousMedicalInfo = '';
	let takingMedicine = false;
</script>

<section class="dark:bg-gray-900 min-h-max">
	<div class="flex justify-center min-h-screen">
		<div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
			<div class="w-full">
				<h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
					Unlock Extra Features with a Paid Membership
				</h1>

				<p class="mt-4 text-gray-500 dark:text-gray-400">
					As a paid member of Shubh Sambandh, you gain access to a range of exclusive features that
					can significantly enhance your search for a life partner. With our paid membership, you
					can:
				</p>

				<ul
					class="list-disc list-inside mt-2 text-gray-500 dark:text-gray-400 text-start lg:text-base text-sm"
				>
					<li>
						View complete profiles of other members, including additional photos and detailed
						information
					</li>
					<li>
						Receive priority placement in search results, increasing your visibility to potential
						matches
					</li>
					<li>Send personalized messages and connect with other members directly</li>
					<li>Get access to advanced search filters to refine your partner preferences</li>
					<li>Receive recommendations based on compatibility and shared interests</li>
					<li>Participate in exclusive events and gatherings for paid members</li>
				</ul>

				<p class="mt-4 text-gray-500 dark:text-gray-400">
					To fully experience these benefits, it's important to complete your detailed profile. This
					will help us understand your preferences and requirements better, enabling us to provide
					more accurate and tailored matches for you. Join now and embark on a more personalized and
					fruitful matchmaking experience.
				</p>
				<form class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<h1
						class="text-4xl font-semibold col-span-1 text-center md:col-span-2 tracking-wider text-gray-800 capitalize dark:text-white"
					>
						Personal Details
					</h1>
					<div>
						<label for="placeOfBirth" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
							>Place of Birth</label
						>
						<select
							name="placeOfBirth"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						>
							<option value="" selected disabled hidden>Select Place of Birth</option>
							<option value="india">India</option>
							<option value="outside-india">Out of India</option>
						</select>
					</div>

					<div>
						<label for="bloodGroup" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
							>Blood Group</label
						>
						<select
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

					<div>
						<label for="caste" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
							>Diet</label
						>
						<select
							bind:value={diet}
							name="diet"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						>
							<option value="" selected disabled hidden>Select Diet</option>
							<option value="veg">Vegetarian</option>
							<option value="non-veg">Non-Vegetarian</option>
							<option value="jain">Jain (no root vegetables)</option>
							<option value="sattvik">Sattvik (no onion/garlic)</option>
							<option value="others">Others (please specify)</option>
						</select>

						{#if diet === 'others'}
							<div class="mt-2">
								<label for="otherDiet" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
									>Please specify</label
								>
								<input
									type="text"
									bind:value={otherDiet}
									name="diet"
									class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
						{/if}
					</div>
					<div>
						<label for="bloodGroup" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
							>Blood Group</label
						>
						<select
							name="bloodGroup"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						>
							<!-- {#each locationData as country}
						<option>{country.name}</option>
						{/each} -->
						</select>
					</div>
					<div class="col-span-full">
						<label for="hobbies" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
							>Hobbies</label
						>
						<div
							class="flex flex-col items-start justify-center gap-2 overflow-hidden text-white border border-gray-200 rounded-lg"
						>
							<div
								{...$root}
								use:root.action
								class="flex flex-wrap gap-2.5 rounded-md bg-transparent px-3 py-2"
							>
								{#each $tags as t}
									<div {...$tag(t)} class="tag">
										<span class="flex items-center border-r border-white/10 px-1.5">{t.value}</span>

										<button {...$deleteTrigger(t)} use:deleteTrigger.action class="tag-delete">
											<X class="h-3 w-3" />
										</button>
									</div>
								{/each}

								<input
									{...$input}
									use:input.action
									type="text"
									class="shake min-w-[4.5rem] bg-transparent shrink grow basis-0 border-0 outline-none focus:!ring-0"
								/>
							</div>
						</div>
					</div>

					<div class="col-span-full text-white">
						<label for="hobbies" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
							>Sports</label
						>
						<!-- <MultiSelect 
							id="fav-languages"
							options={sportsList}
							placeholder="Sports..."
							bind:selected
							let:idx
							let:option><LanguageSlot {idx} {option} gap="1ex" /></MultiSelect
						> -->
						<Select
							on:change={handleChange}
							multiple
							on:filter={handleFilter}
							bind:filterText
							bind:value
							{items}
							--background="transparent"
							--item-color="white"
							--multi-item-bg="black"
							--placeholder-color="white"
							--selected-item-color="white"
						>
							<div class="text-black" slot="item" let:item>
								{item.created ? 'Add new: ' : ''}
								{item.label}
							</div>
						</Select>
					</div>
					<div class="col-span-full">
						<label for="bio" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Bio</label>
						<Textarea
							class="text-white border-gray-600 rounded-lg h-32 placeholder:text-sm placeholder:text-gray-400 text-base"
							placeholder="You can share some details about your personality, interests, and background. This will help potential matches to get to know you better. Consider mentioning your hobbies, passions, and any unique qualities that make you who you are. Take this opportunity to express what you value in a relationship. Keep your repsonse concise, yet informative, focusing on the most important aspects of your personality and life. Feel free to update you profile periodically as your interests and preferences evolve."
						/>
					</div>
					<Button
						class="bg-black dark:bg-white text-white dark:text-black rounded-lg mx-auto col-span-full"
						>Save Personal Details</Button
					>
				</form>
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
							<label
								for="medicalConditions"
								class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
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
							<label
								for="additionalMedicalInfo"
								class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
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
							<label
								for="medicalConditions"
								class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
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
							<label
								for="additionalMedicalInfo"
								class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
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
				</form>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.tag {
		@apply flex items-center overflow-hidden rounded-md [word-break:break-word];
		@apply bg-magnum-600 text-white;
		@apply data-[selected]:bg-teal-500;
		@apply data-[disabled]:bg-magnum-300 data-[disabled]:hover:cursor-default data-[disabled]:focus:!outline-none data-[disabled]:focus:!ring-0;
	}

	.tag-delete {
		@apply flex h-full items-center px-1;
		@apply enabled:hover:bg-magnum-700;
		@apply data-[selected]:hover:bg-teal-600;
	}
</style>
