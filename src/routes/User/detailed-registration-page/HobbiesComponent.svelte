<script lang="ts">
	import Select from 'svelte-select';
	let filterText = '';

	export let value: any = null;
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
		placeholder="Select Option"
		on:change={handleChange}
		multiple
		on:filter={handleFilter}
		bind:filterText
		bind:value
		showChevron
		{items}
		--background="transparent"
		--list-background="white"
		--border="1px solid #ccc"
		--border-radius="4px"
		--box-sizing="border-box"
		--item-color="#333"
		--multi-item-bg="#f0f0f0"
		--placeholder-color="#777"
		--selected-item-color="#333"
	>
		<div class="text-black" slot="item" let:item>
			{item.created ? 'Add new: ' : ''}
			{item.label}
		</div>
	</Select>
</div>
