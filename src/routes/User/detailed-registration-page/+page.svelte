<script>
	import PersonalDetails from './PersonalDetails.svelte';
	import MedicalDetails from './MedicalDetails.svelte';
	import SpiritualDetails from './SpiritualDetails.svelte';
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
				<PersonalDetails />
				<MedicalDetails />
				<SpiritualDetails />
			</div>
		</div>
	</div>
</section>
