<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import Badge from '../components/badge.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<h1>Posts</h1>
	<div class="posts">
		{#each data.posts as post}
			<div class="post">
				<div class="title-group">
					<h2 class="title"><a href={`/${post.slug}`}>{post.title}</a></h2>
					<div class="tags">
						{#each post.tags as tag}
							<Badge href={`/tags/${tag}`}>{tag}</Badge>
						{/each}
					</div>
					<p class="description">{post.description || ''}</p>
				</div>
				<div class="date">{formatDate(post.date)}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	h1 {
		margin-top: 0;
	}
	.posts {
		display: grid;
	}
	.post {
		display: flex;
		flex-direction: column;
		/* flex-direction: row-reverse; */
		padding: 1rem 0;
		gap: 0.5rem;
	}
	.post:first-child {
		padding-top: 0;
	}
	.post:not(:last-child) {
		border-bottom: 1px solid var(--muted);
	}
	.title {
		font-size: var(--font-lg);
		text-transform: capitalize;
		border: 0;
		margin: 0;
		padding: 0;
	}
	.title > a {
		text-decoration: none;
		color: var(--text-1);
	}
	.title > a:hover {
		text-decoration: underline;
	}
	.description {
		margin: 0.5rem 0 0;
		font-size: var(--font-sm);
		color: var(--text-1);
		line-height: 1.7;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		margin: 0.5rem 0 0;
	}
	.date {
		color: var(--text-2);
		font-size: var(--font-sm);
		/* padding: 0 0 1.5rem; */
	}
</style>
