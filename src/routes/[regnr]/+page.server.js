import { SVV_Authorization } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const res = await fetch(
		'https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/felles/datautlevering/enkeltoppslag/kjoretoydata?kjennemerke=' +
			params.regnr,
		{ headers: { 'SVV-Authorization': SVV_Authorization } }
	);

	if (res.status === 429) {
		throw error(429);
	}

	if (res.status === 403) {
		throw error(403);
	}

	if (res.status === 400 || res.status === 204) {
		throw error(404, 'Finner ikke dette kjøretøyet');
	}

	if (res.ok) {
		const result = await res.json();
		const car = result.kjoretoydataListe[0];

		const euFrist = car.periodiskKjoretoyKontroll?.kontrollfrist;
		const regnr = car.kjoretoyId.kjennemerke;
		const make = car.godkjenning.tekniskGodkjenning.tekniskeData.generelt.merke[0].merke;
		const model = car.godkjenning.tekniskGodkjenning.tekniskeData.generelt.handelsbetegnelse[0];
		return {
			car: {
				euFrist,
				regnr,
				make,
				model
			}
		};
	}

	throw error(500);
}
