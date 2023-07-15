<script lang="ts">
	import Select from 'svelte-select';
	let filterText = '';

	let value: any = null;

	export let items: any;

	function handleFilter(e: any) {
		if (value?.find((i) => i.label === filterText)) return;
		if (e.detail.length === 0 && filterText.length > 0) {
			const prev = items.filter((i) => !i.created);
			items = [...prev, { value: filterText, label: filterText, created: true }];
		}
	}

	function handleChange(e) {
		items = items.map((i) => {
			delete i.created;
			return i;
		});
	}
</script>

<div class="col-span-full text-white">
	<label for="hobbies" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Hobbies</label>
	<Select
		on:change={handleChange}
		multiple
		on:filter={handleFilter}
		bind:filterText
		bind:value
		{items}
		--background="transparent"
		--item-color="white"
		--multi-item-bg="black"
		--placeholder-color="white"
		--selected-item-color="white"
	>
		<div class="text-black" slot="item" let:item>
			{item.created ? 'Add new: ' : ''}
			{item.label}
		</div>
	</Select>
</div>
