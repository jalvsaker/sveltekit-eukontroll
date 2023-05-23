<script>
	import { goto } from '$app/navigation';
	let input = '';

	function handleSubmit(e) {
		e.preventDefault();
		goto(`/${input}`);
	}
</script>

<h1>Når er EU-kontroll?</h1>
<form on:submit={handleSubmit} method="POST">
	<label for="regnr" hidden>Regnr</label>
	<input name="regnr" id="regnr" type="text" bind:value={input} />
	<button>Check</button>
</form>
