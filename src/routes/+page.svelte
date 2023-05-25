<script>
	import { goto } from '$app/navigation';
	let input = '';

	function handleSubmit(e) {
		e.preventDefault();
		goto(`/${input}`);
	}
</script>

<form on:submit={handleSubmit} method="POST">
	<label for="regnr" hidden>Regnr</label>
	<input name="regnr" id="regnr" type="text" placeholder="Registreringsnummer " bind:value={input} />
	<button>Check</button>
</form>
<svelte:head>
	<title>Når er EU-kontroll?</title>
</svelte:head>