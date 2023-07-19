import { SVV_Authorization } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ params, setHeaders }) {
	const res = await fetch(
		'https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/felles/datautlevering/enkeltoppslag/kjoretoydata?kjennemerke=' +
			params.regnr,
		{ headers: { 'SVV-Authorization': SVV_Authorization } }
	);

	if (res.status === 429) {
		throw error(500, 'Feil: Tjenesten har brukt opp kvoten sin hos Statens Vegvesen');
	}

	if (res.status === 403) {
		throw error(500, 'Feil: Tjenesten har ikke tilgang til data fra Statens Vegvesen');
	}

	if (res.status === 400 || res.status === 204) {
		throw error(404, 'Finner ikke dette kjøretøyet');
	}

	if (res.ok) {
		const result = await res.json();
		const car = result.kjoretoydataListe[0];

		const euFristDate = new Date(car.periodiskKjoretoyKontroll?.kontrollfrist);
		const regnr = car.kjoretoyId.kjennemerke;
		const make = car.godkjenning.tekniskGodkjenning.tekniskeData.generelt.merke[0].merke;
		let model = car.godkjenning.tekniskGodkjenning.tekniskeData.generelt.handelsbetegnelse[0];

		const dateFormatter = Intl.DateTimeFormat('no-nb', { dateStyle: 'medium' });
		let euFrist;
		try {
			euFrist = dateFormatter.format(euFristDate);
		} catch {
			euFrist = undefined;
		}

		if (model === '-') {
			model = undefined;
		}

		setHeaders({ 'Cache-Control': 's-maxage=86400' });

		return {
			car: {
				euFrist,
				regnr,
				make,
				model
			}
		};
	}

	throw error(500, `Ukjent feil: ${res.status} ${res.statusText}`);
}
