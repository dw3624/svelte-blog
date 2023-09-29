import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

const getTags = async () => {
	let tags: string[] = [];
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && tags.push(...post.tags);
		}
	}

	tags = Array.from(new Set(tags));

	return tags;
};

export async function GET() {
	const tags = await getTags();
	return json(tags);
}
