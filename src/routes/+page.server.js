import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const regnr = data.get('regnr').toUpperCase();

		throw redirect(303, `/${regnr}`);
	}
};

export function load({ setHeaders }) {
	setHeaders({ 'Cache-Control': 's-maxage=31536000' });
}
