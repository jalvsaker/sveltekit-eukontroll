import { SVV_Authorization } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const res = await fetch(
		'https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/felles/datautlevering/enkeltoppslag/kjoretoydata?kjennemerke=' +
			params.regnr,
		{ headers: { 'SVV-Authorization': SVV_Authorization } }
	);

	if (res.ok && res.status !== 204) {
		const car = await res.json();

		const vehicle = car.kjoretoydataListe[0];
		const euFrist = vehicle.periodiskKjoretoyKontroll?.kontrollfrist;
		const regnr = vehicle.kjoretoyId.kjennemerke;
		const make = vehicle.godkjenning.tekniskGodkjenning.tekniskeData.generelt.merke[0].merke;
		const model = vehicle.godkjenning.tekniskGodkjenning.tekniskeData.generelt.handelsbetegnelse[0];
		return {
			car: {
				euFrist,
				regnr,
				make,
				model
			}
		};
	}

	throw error(404, 'Not Found');
}
