<script lang='ts'>
	import type { PageData } from "./$types";

	let open = false;
	export let data: PageData
</script>

<div>
	<nav class="flex h-20 flex-row justify-between bg-gray-900">
		<div class="my-auto pl-8">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="h-8 w-8 md:h-14 md:w-14"
				fill="white"
			>
				<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
				/>
			</svg>
		</div>
		<div class="my-auto flex h-3/5 flex-row gap-6 pl-24 text-white">
			<h1 class="my-auto">{data.user.serialNumber}</h1>
			<div class="ml- my-auto h-10 w-10 rounded-full bg-white">
				<img
					class="h-full w-full rounded-full object-cover"
					src="{data.user.profilePictureUrl}"
					alt=""
				/>
			</div>
			<form method="post">
				<button
				type="submit"
				class="mb-2 mr-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Sign out</button
			>
			</form>
		</div>
	</nav>

	<div class="h-screen w-1/6 bg-gray-200 flex justify-end">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-x"
			viewBox="0 0 16 16"
		>
			<path
				d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
			/>
		</svg>
	</div>
</div>
