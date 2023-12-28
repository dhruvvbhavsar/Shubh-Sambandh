<script>
	// @ts-nocheck

	import { HeartIcon } from 'lucide-svelte';
	export let data;
	let click = data.isLiked;
	let connect = data.isConnected;
	const person = data.profile[0];
	const user = data.user;
	const details = data.details;
	console.log(details);
	async function handleLike() {
		if (click) return;
		click = true;
		const res = await fetch('/api/like', {
			method: 'POST',
			body: JSON.stringify({ sender: user.userId, receiver: person.id })
		});
		console.log(res.json());
	}

	async function handleConnect() {
		if (connect) return;
		connect = true;
		const res = await fetch('/api/connect', {
			method: 'POST',
			body: JSON.stringify({ sender: user.userId, receiver: person.id })
		});
		console.log(res.json());
	}
</script>

<main class="flex flex-col sm:flex-row">
	<section class="relative flex h-screen w-full flex-col items-center justify-center bg-white">
		<div class="relative flex h-48 w-48 items-center justify-center rounded-2xl bg-gray-300">
			<div
				class={`absolute -right-4 -top-4 rounded-full ${
					person.isPaid ? 'bg-amber-600' : 'bg-red-900'
				} px-2 py-1 text-xs text-white`}
			>
				{person.isPaid ? 'Plus+' : 'Basic'}
			</div>
			<img
				class="w-full h-full object-cover rounded-2xl object-center"
				src={person.profilePictureUrl}
				alt=""
			/>
		</div>

		<div class="relative mt-1">
			<h2 class="mt-2 text-center text-2xl font-semibold text-gray-700">
				{person.firstName + ' ' + person.lastName}
			</h2>
		</div>

		<div class="mt-8 flex gap-4 items-center">
			<button
				on:click={handleConnect}
				disabled={connect ? true : false}
				class={`bg-blue-500 disabled:bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
				>{connect ? 'Sent' : 'Connect'}</button
			>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div on:click={handleLike}>
				<HeartIcon class="text-red-600 w-10 h-10 cursor-pointer {click ? 'fill-red-600' : ''}" />
			</div>
		</div>
	</section>
	<section class="h-screen w-full bg-gray-200 p-8">
		<div class="mb-4 text-2xl font-semibold text-gray-700">Basic Information</div>
		<div class="grid grid-cols-2 gap-4">
			<div class="flex flex-col">
				<span class="text-gray-600">Serial Number</span>
				<span>{person.serialNumber}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">First Name</span>
				<span>{person.firstName}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Last Name</span>
				<span>{person.lastName}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Gender</span>
				<span>{person.gender}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Caste</span>
				<span>{person.caste}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Date of Birth</span>
				<span>{person.dateOfBirth.toDateString()}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Time of Birth</span>
				<span>{person.timeOfBirth}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Marital Status</span>
				<span>{person.maritalStatus}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Mobile Number</span>
				<span class="select-none blur-sm">{person.mobileNumber}</span>
			</div>
			<div class="flex flex-col">
				<span class="text-gray-600">Email</span>
				<span class="select-none blur-sm">{person.email}</span>
			</div>
		</div>
	</section>
</main>

{#if details}
	<div class="w-full bg-gray-200 p-8">
		<!-- Personal Details -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
			<h1 class="mb-4 text-2xl col-span-full font-semibold text-gray-700">Personal Details</h1>

			<!-- Country of Birth -->
			<div class="flex flex-col">
				<span class="text-gray-600">Country of Birth</span>
				<span>{details.personal_details.country_of_birth}</span>
			</div>

			<!-- Current Address -->
			<div class="flex flex-col">
				<span class="text-gray-600">Current Address</span>
				<span
					>{details.personal_details.current_country}, {details.personal_details.current_state}, {details
						.personal_details.current_city}</span
				>
			</div>

			<!-- Permanent Address (if applicable) -->
			{#if details.personal_details.is_permanent}
				<div class="flex flex-col">
					<span class="text-gray-600">Permanent Address</span>
					<span
						>{details.personal_details.permanent_country}, {details.personal_details
							.permanent_state}, {details.personal_details.permanent_city}</span
					>
				</div>
			{/if}

			<!-- Citizenship Status -->
			<div class="flex flex-col">
				<span class="text-gray-600">Citizenship Status</span>
				<span>{details.personal_details.citizenship_status}</span>
			</div>

			<!-- Dual Citizenship (if applicable) -->
			{#if details.personal_details.dual_citizenship}
				<div class="flex flex-col">
					<span class="text-gray-600">Dual Citizenship</span>
					<span>{details.personal_details.dual_citizenship}</span>
				</div>
				<!-- Display dual citizenship countries if available -->
				{#if details.personal_details.dual_citizenship_countries.length > 0}
					<div class="flex flex-col">
						<span class="text-gray-600">Dual Citizenship Countries</span>
						<ul>
							{#each details.personal_details.dual_citizenship_countries as country}
								<li>{country}</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/if}

			<!-- Blood Group -->
			<div class="flex flex-col">
				<span class="text-gray-600">Blood Group</span>
				<span>{details.personal_details.blood_group}</span>
			</div>

			<!-- Diet -->
			<div class="flex flex-col">
				<span class="text-gray-600">Diet</span>
				{#if details.personal_details.other_diet}
					<span>{details.personal_details.other_diet}</span>
				{:else}
					<span>{details.personal_details.diet}</span>
				{/if}
			</div>

			<!-- Marital Status -->
			<div class="flex flex-col">
				<span class="text-gray-600">Marital Status</span>
				<span>{details.personal_details.marital_status}</span>
			</div>

			<!-- Have Children -->
			<div class="flex flex-col">
				<span class="text-gray-600">Have Children</span>
				{#if details.personal_details.have_children === 'Yes'}
					<span>Yes, {details.personal_details.how_many_children} children</span>
				{:else if details.personal_details.have_children === 'No'}
					<span>No</span>
				{/if}
			</div>

			<!-- Mother Tongue -->
			<div class="flex flex-col">
				<span class="text-gray-600">Mother Tongue</span>
				{#if details.personal_details.mother_tongue === 'others'}
					<span>{details.personal_details.other_tongue}</span>
				{:else}
					<span>{details.personal_details.mother_tongue}</span>
				{/if}
			</div>

			<!-- Height -->
			<div class="flex flex-col">
				<span class="text-gray-600">Height</span>
				<span>{details.personal_details.height}</span>
			</div>

			<!-- Weight -->
			<div class="flex flex-col">
				<span class="text-gray-600">Weight</span>
				<span>{details.personal_details.weight}</span>
			</div>

			<!-- PWD -->
			<div class="flex flex-col">
				<span class="text-gray-600">Person With Disability(PwD)</span>
				<span>{details.personal_details.pwd}</span>
			</div>

			{#if details.personal_details.pwd}
				<!-- PWD Type -->
				<div class="flex flex-col">
					<span class="text-gray-600">PWD Type</span>
					<span>{details.personal_details.pwd_type}</span>
				</div>

				<!-- Other PWD (displayed when PWD Type is set to "Other") -->
				{#if details.personal_details.pwd_type === 'others'}
					<div class="flex flex-col">
						<span class="text-gray-600">Other PWD</span>
						<span>{details.personal_details.other_pwd}</span>
					</div>
				{/if}

				<!-- PWD Relation -->
				<div class="flex flex-col">
					<span class="text-gray-600">PWD Relation</span>
					{#if details.personal_details.pwd_relation === 'others'}
						<span>{details.personal_details.other_pwd_relation}</span>
					{:else}
						<span>{details.personal_details.pwd_relation}</span>
					{/if}
				</div>

				<!-- PWD Relation Name -->
				<div class="flex flex-col">
					<span class="text-gray-600">PWD Relation Name</span>
					<span>{details.personal_details.pwd_relation_name}</span>
				</div>

				<!-- PWD Relation Number -->
				<div class="flex flex-col">
					<span class="text-gray-600">PWD Relation Number</span>
					<span>{details.personal_details.pwd_relation_number}</span>
				</div>
			{/if}

			<!-- Bio -->
			<div class="flex flex-col col-span-full">
				<span class="text-gray-600">Bio</span>
				<span>{details.personal_details.bio}</span>
			</div>
		</div>

		<!-- Medical Details -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4 mt-8">
			<h1 class="mb-4 text-2xl col-span-full font-semibold text-gray-700">Medical Details</h1>

			<!-- Current Medical Condition -->
			<div class="flex flex-col">
				<span class="text-gray-600">Current Medical Condition</span>
				<span>{details.medical_details.currentMedicalCondition ? 'Yes' : 'No'}</span>
			</div>

			<!-- Current Medical Info -->
			{#if details.medical_details.currentMedicalCondition}
				<div class="flex flex-col">
					<span class="text-gray-600">Current Medical Information</span>
					<span>{details.medical_details.currentMedicalInfo}</span>
				</div>
			{/if}

			<!-- Additional Current Medical Info -->
			{#if details.medical_details.currentMedicalCondition && details.medical_details.additionalMedicalInfo}
				<div class="flex flex-col">
					<span class="text-gray-600">Additional Medical Information</span>
					<span>{details.medical_details.additionalMedicalInfo}</span>
				</div>
			{/if}

			<!-- Previous Medical Condition -->
			<div class="flex flex-col">
				<span class="text-gray-600">Previous Medical Condition</span>
				<span>{details.medical_details.previousMedicalCondition ? 'Yes' : 'No'}</span>
			</div>

			<!-- Previous Medical Info -->
			{#if details.medical_details.previousMedicalCondition}
				<div class="flex flex-col">
					<span class="text-gray-600">Previous Medical Information</span>
					<span>{details.medical_details.previousMedicalInfo}</span>
				</div>
			{/if}

			<!-- Additional Previous Medical Info -->
			{#if details.medical_details.previousMedicalCondition && details.medical_details.additionalPreviousMedicalInfo}
				<div class="flex flex-col">
					<span class="text-gray-600">Additional Previous Medical Information</span>
					<span>{details.medical_details.additionalPreviousMedicalInfo}</span>
				</div>
			{/if}

			<!-- Taking Medicine -->
			<div class="flex flex-col">
				<span class="text-gray-600">Taking Medicine</span>
				<span>{details.medical_details.takingMedicine ? 'Yes' : 'No'}</span>
			</div>

			<!-- How Long Taking Medicine -->
			{#if details.medical_details.takingMedicine}
				<div class="flex flex-col">
					<span class="text-gray-600">How Long Taking Medicine</span>
					{#if details.medical_details.howLongTakingMedicine}
						<span>{details.medical_details.howLongTakingMedicine}</span>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Educational Details -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4 mt-8">
			<h1 class="mb-4 text-2xl col-span-full font-semibold text-gray-700">Educational Details</h1>

			<!-- Qualification -->
			<div class="flex flex-col">
				<span class="text-gray-600">Qualification</span>
				{#if details.educational_details.qualification === 'Others'}
					<span>{details.educational_details.other_qualification}</span>
				{:else}
					<span>{details.educational_details.qualification}</span>
				{/if}
			</div>
		</div>

		<!-- Professional Details -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4 mt-8">
			<h1 class="mb-4 text-2xl col-span-full font-semibold text-gray-700">Professional Details</h1>

			<!-- Career -->
			<div class="flex flex-col">
				<span class="text-gray-600">Career</span>
				<span>{details.professional_details.career}</span>
			</div>

			<!-- Designation -->
			<div class="flex flex-col">
				<span class="text-gray-600">Designation</span>
				<span>{details.professional_details.designation}</span>
			</div>

			<!-- Employer or Organization -->
			<div class="flex flex-col">
				<span class="text-gray-600">Employer or Organization</span>
				<span>{details.professional_details.employer_or_organization}</span>
			</div>

			<!-- Income -->
			<div class="flex flex-col">
				<span class="text-gray-600">Income</span>
				{#if details.professional_details.income}
					<span>{details.professional_details.income}</span>
				{/if}
			</div>
		</div>

		<!-- Family Details -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4 mt-8">
			<h1 class="mb-4 text-2xl col-span-full font-semibold text-gray-700">Family Details</h1>

			<!-- Family Type -->
			<div class="flex flex-col">
				<span class="text-gray-600">Family Type</span>
				<span>{details.family_details.family_type}</span>
			</div>

			<!-- Own House -->
			<div class="flex flex-col">
				<span class="text-gray-600">Own House</span>
				<span>{details.family_details.own_house}</span>
			</div>

			<!-- Housing Status -->
			<div class="flex flex-col">
				<span class="text-gray-600">Housing Status</span>
				{#if details.family_details.housing_status === 'others'}
					<span>{details.family_details.other_housing_status}</span>
				{:else}
					<span>{details.family_details.housing_status}</span>
				{/if}
			</div>

			<!-- Family Value -->
			<div class="flex flex-col">
				<span class="text-gray-600">Family Value</span>
				{#if details.family_details.family_value === 'others'}
					<span>{details.family_details.other_family_value}</span>
				{:else}
					<span>{details.family_details.family_value}</span>
				{/if}
			</div>

			<!-- Father's Details -->
			<div class="flex flex-col">
				<span class="text-gray-600">Father's Name</span>
				<span>{details.family_details.father_name}</span>
				{#if details.family_details.father_status === 'Working' || details.family_details.father_status === 'Self-employed' || details.family_details.father_status === 'Business owner'}
					<span
						>{details.family_details.father_status} - {details.family_details
							.other_father_status}</span
					>
				{:else}
					<span>{details.family_details.father_status}</span>
				{/if}
			</div>

			<!-- Mother's Details -->
			<div class="flex flex-col">
				<span class="text-gray-600">Mother's Name</span>
				<span>{details.family_details.mother_name}</span>
				{#if details.family_details.mother_status === 'others'}
					<span>{details.family_details.other_mother_status}</span>
				{:else}
					<span>{details.family_details.mother_status}</span>
				{/if}
			</div>

			<!-- Siblings Details -->
			<div class="flex flex-col">
				<span class="text-gray-600">Have Siblings</span>
				{#if details.family_details.have_siblings === 'Yes'}
					<span>Yes, {details.family_details.how_many_siblings} siblings</span>
				{:else}
					<span>No</span>
				{/if}
			</div>

			<!-- Family Devotional Details -->
			<div class="flex flex-col">
				<span class="text-gray-600">Family Devotional Details</span>
				<span>{details.family_details.family_devotional_details}</span>
			</div>
		</div>

		<!-- Lifestyle Details -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4 mt-8">
			<h1 class="mb-4 text-2xl col-span-full font-semibold text-gray-700">Lifestyle Details</h1>

			<!-- Hobbies -->
			<div class="flex flex-col">
				<span class="text-gray-600">Hobbies</span>
				{#each details.lifestyle_details.s_hobbies as hobby}
					<span>{hobby}</span>
				{/each}
			</div>

			<!-- Sports -->
			<div class="flex flex-col">
				<span class="text-gray-600">Sports</span>
				{#each details.lifestyle_details.s_sports as sport}
					<span>{sport}</span>
				{/each}
			</div>

			<!-- Exercise -->
			<div class="flex flex-col">
				<span class="text-gray-600">Exercise</span>
				{#if details.lifestyle_details.do_you_exercise === 'others'}
					<span>{details.lifestyle_details.exercise_thoughts}</span>
				{:else}
					<span>{details.lifestyle_details.do_you_exercise}</span>
				{/if}
			</div>

			<!-- Living Arrangements -->
			<div class="flex flex-col">
				<span class="text-gray-600">Who Do You Live With</span>
				{#if details.lifestyle_details.who_do_you_live_with === 'others'}
					<span>{details.lifestyle_details.others_who_do_you_live_with}</span>
				{:else}
					<span>{details.lifestyle_details.who_do_you_live_with}</span>
				{/if}
			</div>

			<!-- After Marriage Plans -->
			<div class="flex flex-col">
				<span class="text-gray-600">After Marriage Plans</span>
				{#if details.lifestyle_details.after_marriage_plans === 'others'}
					<span>{details.lifestyle_details.others_after_marriage_plans}</span>
				{:else}
					<span>{details.lifestyle_details.after_marriage_plans}</span>
				{/if}
			</div>
		</div>

		<!-- Astrology Details -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-4 mt-8">
			<h1 class="mb-4 text-2xl col-span-full font-semibold text-gray-700">Astrology Details</h1>

			<!-- Manglik -->
			<div class="flex flex-col">
				<span class="text-gray-600">Manglik</span>
				<span>{details.astrology_details.manglik}</span>
			</div>

			<!-- Rashi -->
			<div class="flex flex-col">
				<span class="text-gray-600">Rashi</span>
				<span>{details.astrology_details.rashi}</span>
			</div>

			<!-- Horoscope Match -->
			<div class="flex flex-col">
				<span class="text-gray-600">Horoscope Match</span>
				<span>{details.astrology_details.horoscope_match}</span>
			</div>

			<!-- Astrology Compatibility -->
			<div class="flex flex-col">
				<span class="text-gray-600">Astrology Compatibility</span>
				<span>{details.astrology_details.astrology_compatibility}</span>
			</div>

			<!-- Consultation -->
			<div class="flex flex-col">
				<span class="text-gray-600">Consultation</span>
				<span>{details.astrology_details.consultation}</span>
			</div>

			<!-- Preferred Astrologer -->
			<div class="flex flex-col">
				<span class="text-gray-600">Preferred Astrologer</span>
				{#if details.astrology_details.p_astrologer === 'I Have a Preferred Astrologer/Method'}
					<span
						>{details.astrology_details.p_astrologer} - {details.astrology_details
							.other_astrolger}</span
					>
				{:else}
					<span>{details.astrology_details.p_astrologer}</span>
				{/if}
			</div>
		</div>
	</div>
{/if}
