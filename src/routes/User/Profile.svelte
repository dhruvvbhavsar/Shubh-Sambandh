<script lang="ts">
	import { MapPin } from "lucide-svelte";

	export let user: any

	function calculateAge(dateOfBirthString: string | number | Date) {
		const dateOfBirth = new Date(dateOfBirthString);
		const now = new Date();

		const yearsDiff = now.getFullYear() - dateOfBirth.getFullYear();
		const monthsDiff = now.getMonth() - dateOfBirth.getMonth();
		const daysDiff = now.getDate() - dateOfBirth.getDate();

		if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
			return yearsDiff - 1;
		}

		return yearsDiff;
	}
</script>

<a href={`/User/${user.id}`} class="w-full overflow-hidden rounded-lg bg-blue-300 p-4 shadow-lg">
	<div class="h-60 bg-cover bg-center" style="background-image: url('{user.profilePictureUrl}')" />
	<div class="mt-4 flex items-center justify-between">
		<div class="text-lg font-medium">
			{user.firstName}, {calculateAge(user.dateOfBirth)}
		</div>
		<div class="flex items-center gap-1">
			<MapPin size={16} />
			<div class="text-sm text-gray-600">{user.city}, {user.country}</div>
		</div>
	</div>
</a>
