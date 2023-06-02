<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Når er EU-kontroll?</title>
</svelte:head>
<form method="POST" use:enhance>
	<label for="regnr" hidden>Registreringsnummer</label>
	<div class="input">
		<input name="regnr" id="regnr" type="text" placeholder="Registreringsnummer" />
		<button>Check</button>
	</div>
</form>

<style module>
	.input {
		display: flex;
	}
</style>
