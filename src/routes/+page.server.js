import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const regnr = data.get('regnr');

		throw redirect(303, `/${regnr}`);
	}
};
