<script>
	export let data;

	const car = data.car.kjoretoydataListe[0];

	const euFrist = new Date(car.periodiskKjoretoyKontroll?.kontrollfrist);
	const dateFormatter = Intl.DateTimeFormat('no-nb', { dateStyle: 'medium' });

	let eu;
	try {
		eu = dateFormatter.format(euFrist);
	} catch {}
</script>

<h1>{car.kjoretoyId.kjennemerke}</h1>
{#if eu}
	<div>Frist for EU-Kontroll: {eu}</div>
{:else}
	<div>Ingen EU-kontroll</div>
{/if}
<!-- <pre>{JSON.stringify(data.car, null, 2)}</pre> -->
