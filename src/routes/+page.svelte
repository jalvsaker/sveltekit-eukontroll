<script>
	import { goto } from '$app/navigation';
	let input = '';

	function handleSubmit(e) {
		e.preventDefault();
		goto(`/${input}`);
	}
</script>

<h1>Når er EU-kontroll?</h1>
<form on:submit={handleSubmit} method="post">
	<input name="regnr" type="text" bind:value={input} />
	<button>Check</button>
</form>
