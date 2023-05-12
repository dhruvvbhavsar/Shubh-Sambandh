<script lang="ts">
export let user: { profilePictureUrl: any; firstName: any; dateOfBirth: string | number | Date; city: any; country: any; };

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

<div class="w-full overflow-hidden rounded-lg bg-blue-300 p-4 shadow-lg">
    <div
        class="h-60 bg-cover bg-center"
        style="background-image: url('{user.profilePictureUrl}')"
    />
    <div class="mt-4 flex items-center justify-between">
        <div class="text-lg font-medium">
            {user.firstName}, {calculateAge(user.dateOfBirth)}
        </div>
        <div class="flex items-center">
            <svg class="mr-2 h-4 w-4 fill-current text-gray-400" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 10a6 6 0 11-12 0 6 6 0 0112 0zm-6-8a2 2 0 11-4 0 2 2 0 014 0zM2 16a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2z"
                />
            </svg>
            <div class="text-sm text-gray-600">{user.city}, {user.country}</div>
        </div>
    </div>
</div>