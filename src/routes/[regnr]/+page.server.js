import { SVV_Authorization } from '$env/static/private';

export async function load({ params }) {
	const res = await fetch(
		'https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/felles/datautlevering/enkeltoppslag/kjoretoydata?kjennemerke=' +
			params.regnr,
		{ headers: { 'SVV-Authorization': SVV_Authorization } }
	);

	if (res.ok) {
		return {
			car: await res.json()
		};
	}
}
