<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let regnr = '';

	function handleSubmit() {
		goto(regnr);
	}
</script>

<svelte:head>
	<title>Når må bilen på EU-kontroll?</title>
</svelte:head>
<form method="POST" use:enhance on:submit|preventDefault={handleSubmit}>
	<label for="regnr" hidden>Registreringsnummer</label>
	<div class="input">
		<input
			name="regnr"
			id="regnr"
			type="text"
			placeholder="Registreringsnummer"
			bind:value={regnr}
		/>
		<button>Check</button>
	</div>
</form>

<style>
	.input {
		display: flex;
		justify-content: center;
	}
</style>
