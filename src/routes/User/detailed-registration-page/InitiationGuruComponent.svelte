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
	--background="transparent"
		--item-color="white"
        --list-background="#111827"
		--placeholder-color="white"
		--selected-item-color="white"
		--item-hover-color="black"
		--item-is-active-bg="white"
		--item-is-active-color="black"
		{items}
		groupBy={(item) => item.group}
		bind:value
	/>
</div>
