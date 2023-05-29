<script>
	import { enhance } from '$app/forms';
</script>

<form method="POST" use:enhance>
	<label for="regnr" hidden>Regnr</label>
	<input name="regnr" id="regnr" type="text" placeholder="Registreringsnummer" />
	<button>Check</button>
</form>
<svelte:head>
	<title>Når er EU-kontroll?</title>
</svelte:head>
