<script lang="ts">
	import Select from 'svelte-select';
	import { initiatingGurus } from './options';

	let value: any = null;

	let items = initiatingGurus;
</script>

<div class="col-span-full w-full text-white">
	<label for="connectedSpiritualOrgName" class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
		>Counselor's Spiritual Master</label
	>
	<Select
		--background="white"
		--item-color="black"
        --list-background="white"
		--placeholder-color="black"
		--selected-item-color="black"
		{items}
		groupBy={(item) => item.group}
		bind:value
	/>
</div>