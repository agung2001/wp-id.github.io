import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    const { title, date } = post.metadata
    // console.log(post.default.render());
    const content = post.default

    return {
        content,
        title,
        date,
    }

    // throw error(404, 'Not found');
}