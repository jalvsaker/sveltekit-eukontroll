import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'edge'
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const regnr = data.get('regnr');

		throw redirect(303, `/${regnr}`);
	}
};
