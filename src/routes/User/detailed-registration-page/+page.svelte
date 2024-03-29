<script lang="ts">
	import PersonalDetails from './PersonalDetails.svelte';
	import MedicalDetails from './MedicalDetails.svelte';
	import SpiritualDetails from './SpiritualDetails.svelte';
	import LifeStyleDetails from './LifeStyleDetails.svelte';
	import EducationalDetails from './EducationalDetails.svelte';
	import ProfessionalDetails from './ProfessionalDetails.svelte';
	import FamilyDetails from './FamilyDetails.svelte';
	import PartnerPreferences from './PartnerPreferences.svelte';
	import AstrologyDetails from './AstrologyDetails.svelte';
	import { Button } from '$components/ui/button';
	import { formData } from '../../../form_store';
	import { goto } from '$app/navigation';
	import { toast } from 'svoast';

	$: form_data = $formData;

	export let data
	const user = data.user

	async function handleSubmit() {
		const res = await fetch('/api/userData', {
			method: 'POST',
			body: JSON.stringify({ id: user.userId, data: form_data})
		});
		console.log(await res.json());
		if(res.ok) {
			toast.success("Saved.", {
			duration: 3000,
		})
			goto('/User')
		}
	}

type FormData = {
  [key: string]: string | FormData;
};

const hasValuesWithLengthGreaterThanOne = (formData: FormData): boolean => {
  for (const key in formData) {
    const value = formData[key];

    if (typeof value === 'object' && !Array.isArray(value)) {
      if (!hasValuesWithLengthGreaterThanOne(value as FormData)) {
        return false;
      }
    } else if (typeof value === 'string' && value.length <= 1) {
      return false;
    }
  }
  return true;
};
</script>

<section class="bg-red-900 min-h-max">
	<div class="flex justify-center min-h-screen">
		<div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
			<div class="w-full">
				<h1 class="text-2xl font-semibold tracking-wider  capitalize text-white">
					Unlock Extra Features with a Paid Membership
				</h1>

				<p class="mt-4 text-white">
					As a paid member of Shubh Sambandh, you gain access to a range of exclusive features that
					can significantly enhance your search for a life partner. With our paid membership, you
					can:
				</p>

				<ul
					class="list-disc list-inside mt-2 text-white text-start lg:text-base text-sm"
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

				<p class="mt-4 text-white">
					To fully experience these benefits, it's important to complete your detailed profile. This
					will help us understand your preferences and requirements better, enabling us to provide
					more accurate and tailored matches for you. Join now and embark on a more personalized and
					fruitful matchmaking experience.
				</p>
				<PersonalDetails />
				<MedicalDetails />
				<SpiritualDetails />
				<LifeStyleDetails />
				<EducationalDetails />
				<ProfessionalDetails />
				<FamilyDetails />
				<PartnerPreferences />
				<AstrologyDetails />

				<Button  class="bg-white h-12 text-lg disabled:cursor-not-allowed rounded-lg mx-auto mt-6 w-full" on:click={handleSubmit} variant="default">Submit</Button>
			</div>
		</div>
	</div>
</section>
