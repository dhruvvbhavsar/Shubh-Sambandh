<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { z } from 'zod';
	import { Country, City } from 'country-state-city';
	import { enhance } from '$app/forms';

	let countries = Country.getAllCountries();

	$: country_iso = countries.find((country) => country.name === $form.country)?.isoCode ?? 'IN';
	$: cities = City.getCitiesOfCountry(country_iso) ?? [];

	let password: string = '';
	const userSchema = z.object({
		firstName: z.string().min(3).max(20).trim(),
		lastName: z.string().min(3).max(20).trim(),
		gender: z.string().default('Male'),
		caste: z.string().default('Hindu'),
		dateOfBirth: z.string(),
		timeOfBirth: z.string(),
		city: z.string(),
		country: z.string(),
		maritalStatus: z.string().default('Never married'),
		other_caste: z.string().nullable(),
		profilePictureUrl: z.string(),
		passwordHash: z.string().min(8).max(64),
		mobileNumber: z.string().min(10).max(10),
		email: z.string().email()
	});
	export let data: PageData;

	const { form, errors, message } = superForm(data.form, {
		taintedMessage: 'Are you sure you want leave?',
		validators: userSchema
	});

	$: match = password === $form.passwordHash;

	let selected_file: File | undefined;
	let imagePreviewUrl: string;

	function handleImageChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) {
			return;
		}
		if (file.size > 1000000) {
			alert('The file size exceeds 1MB limit.');
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			imagePreviewUrl = reader.result as string;
		};
		reader.readAsDataURL(file);

		selected_file = file;
	}

	async function uploadPicture() {
		if (selected_file) {
			const formData = new FormData();
			formData.append('file', selected_file);
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData
			}).then((res) => res.json());
			return await response.url;
		}
	}

	function removeImage() {
		imagePreviewUrl = '';
	}
</script>

<section class="bg-red-900">
	<div class="flex justify-center min-h-screen">
		<div
			class="hidden bg-cover lg:block lg:w-2/5 bg-bottom"
			style="background-image: url('https://images.unsplash.com/photo-1604899063956-fd110d755e10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMG1hcnJpYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')"
		/>

		<div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
			<div class="w-full">
				{#if $message}
					<div>
						<p class="text-white text-4xl text-center pt-10">
							Welcome to Shubh Sambandh, {$message}!
						</p>
						<p class="text-white text-2xl text-center pt-4">
							You may now <a class="underline text-blue-400" href="/Sign">Login</a>
						</p>
					</div>
				{:else}
					<h1 class="text-2xl font-semibold tracking-wider text-white capitalize">
						Embark on the Spiritual Journey of Finding Love
					</h1>

					<p class="mt-4 text-white">
						Welcome to Shubh Sambandh! We are thrilled to have you here and excited to assist you in
						finding your ideal partner. Please provide us with some basic information about yourself
						to create your account and begin your search for a life partner. Thank you for choosing
						our website, and we wish you the best of luck in your journey.
					</p>
					<form
						use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
							// `formElement` is this `<form>` element
							// `formData` is its `FormData` object that's about to be submitted
							// `action` is the URL to which the form is posted
							// calling `cancel()` will prevent the submission
							// `submitter` is the `HTMLElement` that caused the form to be submitted
							if (!selected_file) {
								alert('Please select a profile picture');
								return cancel();
							}
							const url = await uploadPicture();
							formData.append('profilePictureUrl', url);
						}}
						method="POST"
						action="?/register"
						class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
					>
						<div class="relative md:col-span-2 md:mx-auto">
							<label for="pfp" class="block mb-2 text-sm text-white md:mx-auto"
								>Profile Picture <span class="italic">(Max file size: 1 Mb)</span></label
							>
							{#if imagePreviewUrl}
								<div class="relative rounded-md overflow-hidden w-32 h-32">
									<img
										src={imagePreviewUrl}
										alt="User Profile"
										class="object-cover w-full h-full"
									/>
									<button
										id="x_button"
										class="absolute top-1 right-1 text-white hover:text-red-500 p-1 rounded-full"
										on:click={removeImage}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-x-circle-fill"
											viewBox="0 0 16 16"
										>
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
											/>
										</svg>
									</button>
								</div>
							{:else}
								<div class="relative border rounded-md overflow-hidden">
									<input
										name="pfp"
										type="file"
										accept="image/*"
										class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
										on:change={handleImageChange}
									/>
									<div class="flex items-center justify-center h-full">
										<svg class="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24">
											<path
												d="M12 14c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.309 0-10 1.664-10 5v1h20v-1c0-3.336-6.691-5-10-5z"
												fill="currentColor"
											/>
										</svg>
									</div>
								</div>
							{/if}
							{#if $page.status == 400}
								<p class="mt-2 text-sm text-center text-red-700">User already Exists</p>
							{/if}
						</div>
						<div>
							<label for="firstName" class="block mb-2 text-sm text-white">First Name</label>
							<input
								name="firstName"
								bind:value={$form.firstName}
								data-invalid={$errors.firstName}
								type="text"
								placeholder="John"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
							{#if $errors.firstName}<span class="text-red-600 text-sm">{$errors.firstName}</span
								>{/if}
						</div>

						<div>
							<label for="lastName" class="block mb-2 text-sm text-white">Last Name</label>
							<input
								name="lastName"
								bind:value={$form.lastName}
								type="text"
								placeholder="Snow"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
							{#if $errors.lastName}<span class="text-red-600 text-sm">{$errors.lastName}</span
								>{/if}
						</div>

						<div>
							<label for="gender" class="block mb-2 text-sm text-white">Gender</label>
							<select
								bind:value={$form.gender}
								name="gender"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							>
								<option value="" selected disabled hidden>Select Gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
							{#if $errors.gender}<span class="text-red-600 text-sm">{$errors.gender}</span>{/if}
						</div>

						<div>
							<label for="email" class="block mb-2 text-sm text-white">Email address</label>
							<input
								name="email"
								bind:value={$form.email}
								type="email"
								placeholder="johnsnow@example.com"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
							{#if $errors.email}<span class="text-red-600 text-sm">{$errors.email}</span>{/if}
						</div>

						<div>
							<label for="mobileNumber" class="block mb-2 text-sm text-white">Phone number</label>
							<input
								name="mobileNumber"
								type="text"
								maxlength="10"
								placeholder="0000000000"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
							{#if $errors.mobileNumber}<span class="text-red-600 text-sm"
									>{$errors.mobileNumber}</span
								>{/if}
						</div>

						<div>
							<label for="dateOfBirth" class="block mb-2 text-sm text-white">Date of Birth</label>
							<input
								name="dateOfBirth"
								bind:value={$form.dateOfBirth}
								type="date"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
							{#if $errors.dateOfBirth}<span class="text-red-600 text-sm"
									>{$errors.dateOfBirth}</span
								>{/if}
						</div>

						<div>
							<label for="timeOfBirth" class="block mb-2 text-sm text-white">Time of Birth</label>
							<input
								name="timeOfBirth"
								bind:value={$form.timeOfBirth}
								type="time"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
							{#if $errors.timeOfBirth}<span class="text-red-600 text-sm"
									>{$errors.timeOfBirth}</span
								>{/if}
						</div>

						<div>
							<label for="maritalStatus" class="block mb-2 text-sm text-white">Marital Status</label
							>
							<select
								bind:value={$form.maritalStatus}
								name="maritalStatus"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							>
								<option value="" selected disabled hidden>Select Marital Status</option>
								<option value="Never married">Never Married</option>
								<option value="Divorced">Divorced</option>
								<option value="Widowed">Widowed</option>
								<option value="Separated">Separated</option>
							</select>

							{#if $errors.maritalStatus}<span class="text-red-600 text-sm"
									>{$errors.maritalStatus}</span
								>{/if}
						</div>

						<div>
							<label for="caste" class="block mb-2 text-sm text-white">Religon</label>
							<select
								bind:value={$form.caste}
								name="caste"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							>
								<option value="" selected disabled hidden>Select Caste</option>
								<option value="Hindu">Hindu</option>
								<option value="Muslim">Muslim</option>
								<option value="Sikh">Sikh</option>
								<option value="Christian">Christian</option>
								<option value="Buddhist">Buddhist</option>
								<option value="jain">Jain</option>
								<option value="others">Others</option>
							</select>

							{#if $form.caste === 'others'}
								<div class="mt-2">
									<label for="other_caste" class="block mb-2 text-sm text-white"
										>Please specify</label
									>
									<input
										type="text"
										bind:value={$form.other_caste}
										name="caste"
										class="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
									/>
								</div>
							{/if}
							{#if $errors.caste}<span class="text-red-600 text-sm">{$errors.caste}</span>{/if}
						</div>

						<div>
							<label for="country" class="block mb-2 text-sm text-white">Country</label>
							<select
								bind:value={$form.country}
								name="country"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							>
								<option value="" selected disabled hidden>Select Current Country</option>
								{#each countries as country}
									<option value={country.name}>{country.name}</option>
								{/each}
							</select>
							{#if $errors.country}<span class="text-red-600 text-sm">{$errors.country}</span>{/if}
						</div>

						<div>
							<label for="city" class="block mb-2 text-sm text-white">City</label>
							<select
								bind:value={$form.city}
								name="city"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							>
								<option value="" selected disabled hidden>Select City</option>
								{#each cities as city}
									<option value={city.name}>{city.name}</option>
								{/each}
							</select>
							{#if $errors.city}<span class="text-red-600 text-sm">{$errors.city}</span>{/if}
						</div>

						<div>
							<label for="password" class="block mb-2 text-sm text-white">Password</label>
							<input
								name="password"
								type="password"
								placeholder="Enter your password"
								bind:value={password}
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>
						<div>
							<label for="passwordHash" class="block mb-2 text-sm text-white"
								>Confirm Password</label
							>
							<input
								name="passwordHash"
								bind:value={$form.passwordHash}
								placeholder="Enter your password"
								type="password"
								class="block w-full px-5 py-3 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
							{#if !match}
								<p class="text-red-500 text-sm">Passwords do not match</p>
							{/if}
						</div>

						<button
							type="submit"
							disabled={!match || $form.passwordHash.length == 0}
							class={`flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 ${
								!match || $form.passwordHash.length == 0
									? 'bg-gray-400 cursor-not-allowed'
									: 'bg-red-500 hover:bg-red-400'
							}`}
						>
							<span>Sign Up </span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-5 h-5 rtl:-scale-x-100"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
