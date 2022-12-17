import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    console.log(params);
    const post = await import(`../${params.slug}.md`)
    // console.log(post.default.render())
    console.log(post);
    console.log(post.default);
    console.log(post.metadata);
    const { title, date } = post.metadata
    const content = post.default

    return {
        content,
        title,
        date,
    }

    // if (params.slug === 'hello-world') {
    //     return {
    //         title: 'Hello world!',
    //         content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
    //     };
    // }

    throw error(404, 'Not found');
}