<script>
	import InputForm from '../../components/InputForm.svelte';

	export let data;

	const car = data.car;
</script>

<svelte:head>
	<title>{car.regnr} - Når må bilen på EU-kontroll?</title>
</svelte:head>

<h2>{car.regnr}</h2>
<h3>
	{car.make}
	{#if car.model}
		{car.model}
	{/if}
</h3>
{#if car.euFrist}
	<div>Frist for EU-Kontroll: {car.euFrist}</div>
{:else}
	<div>Ingen EU-kontroll</div>
{/if}
<h5>Nytt søk:</h5>
<InputForm />
<!-- <pre style="text-align: left;">{JSON.stringify(data.car, null, 2)}</pre> -->
