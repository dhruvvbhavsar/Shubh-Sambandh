<script lang="ts">
	let file: File | undefined;

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		file = target.files?.[0];
		console.log(file);
	}

	async function handleSubmit() {
		if (file) {
			const formData = new FormData();
			formData.append('file', file);
			await fetch('/api/upload', {
				method: 'POST',
				body: formData
			})
				.then((res) => res.json())
				.then((res) => console.log(res));
		}
	}
</script>

<input type="file" on:change={handleChange} accept="image/*" />
<button on:click={handleSubmit}>Submit</button>
