<script lang="ts">
	// @ts-nocheck
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	export let data: PageData;
	const { form } = superForm(data.form);

	let imagePreviewUrl;

	function handleImageUpload(event) {
		const file = event.target.files[0];

		if (file.size > 1000000) {
			alert('The file size exceeds 1MB limit.');
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			imagePreviewUrl = reader.result;
		};
		reader.readAsDataURL(file);
	}

	function removeImage() {
		imagePreviewUrl = null;
	}
</script>

<SuperDebug data={$form} />
<section class="bg-white dark:bg-gray-900">
	<div class="flex justify-center min-h-screen">
		<div
			class="hidden bg-cover lg:block lg:w-2/5 bg-bottom"
			style="background-image: url('https://images.unsplash.com/photo-1604899063956-fd110d755e10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMG1hcnJpYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')"
		/>

		<div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
			<div class="w-full">
				<h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
					Embark on the Spiritual Journey of Finding Love
				</h1>

				<p class="mt-4 text-gray-500 dark:text-gray-400">
					Welcome to Shubh Sambandh! We are thrilled to have you here and excited to assist you in
					finding your ideal partner. Please provide us with some basic information about yourself
					to create your account and begin your search for a life partner. Thank you for choosing
					our website, and we wish you the best of luck in your journey.
				</p>

				<form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
					<div class="relative md:col-span-2 md:mx-auto">
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200 md:mx-auto"
							>Profile Picture <span class="italic">(Max file size: 1 Mb)</span></label
						>
						{#if imagePreviewUrl}
							<div class="relative rounded-md overflow-hidden w-32 h-32">
								<img
									src={imagePreviewUrl}
									alt="Profile Picture Preview"
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
									type="file"
									accept="image/*"
									class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
									on:change={handleImageUpload}
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
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
						<input
							bind:value={$form.firstName}
							type="text"
							placeholder="John"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
						<input
						bind:value={$form.lastName}
							type="text"
							placeholder="Snow"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>
						<select
						bind:value={$form.gender}
							name="Gender"
							id="gender"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						>
						<option value="" selected disabled hidden>Select Gender</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>

					<!-- <div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
						<input
							type="text"
							placeholder="XXX-XX-XXXX-XXX"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div> -->

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
						<input
						bind:value={$form.email}
							type="email"
							placeholder="johnsnow@example.com"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
						<input
						bind:value={$form.mobileNumber}
							type="tel"
							maxlength="10"
							placeholder="0000000000"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Date of Birth</label>
						<input
						bind:value={$form.dateOfBirth}
							type="date"
							class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Time of Birth</label>
						<input
						bind:value={$form.timeOfBirth}
							type="time"
							class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Marital Status</label
						>
						<select
						bind:value={$form.maritalStatus}
							name="Marital Status"
							id="m_status"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						>
						<option value="" selected disabled hidden>Select Marital Status</option>
							<option value="single">Single</option>
							<option value="divorced">Divorced</option>
							<option value="widow">Widowed</option>
						</select>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Caste</label
						>
						<select
						bind:value={$form.caste}
							name="caste"
							id="m_status"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						>
						<option value="" selected disabled hidden>Select Caste</option>
							<option value="hindu">Hindu</option>
							<option value="muslim">Muslim</option>
							<option value="sikh">Sikh</option>
							<option value="christian">Christian</option>
						</select>
					</div>


					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Country</label>
						<input
						bind:value={$form.country}
							type="text"
							placeholder="India"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">City</label>
						<input
						bind:value={$form.city}
							type="text"
							placeholder="Mumbai"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
						<input
							type="password"
							placeholder="Enter your password"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div>
						<label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
							>Confirm password</label
						>
						<input
						bind:value={$form.passwordHash}
							type="password"
							placeholder="Enter your password"
							class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<button
						class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
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
			</div>
		</div>
	</div>
</section>