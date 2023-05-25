<script>
	export let data;

	const car = data.car;

	const euFrist = new Date(car.euFrist);
	const dateFormatter = Intl.DateTimeFormat('no-nb', { dateStyle: 'medium' });

	let eu;
	try {
		eu = dateFormatter.format(euFrist);
	} catch {
		eu = undefined;
	}
</script>

<svelte:head>
	<title>{car.regnr} - Når er EU-kontroll?</title>
</svelte:head>

<h2>{car.regnr}</h2>
<h3>{car.make} {car.model}</h3>
{#if eu}
	<div>Frist for EU-Kontroll: {eu}</div>
{:else}
	<div>Ingen EU-kontroll</div>
{/if}
<!-- <pre>{JSON.stringify(data.car, null, 2)}</pre> -->
