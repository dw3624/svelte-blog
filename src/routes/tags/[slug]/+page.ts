import type { Post } from '$lib/types';

export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/posts`);
	const posts: Post[] = await response.json();
	const tag_posts: Post[] = [];
	posts.map((post) => {
		if (post.tags.includes(params.slug)) {
			tag_posts.push(post);
		}
	});
	return { params, tag_posts };
};
