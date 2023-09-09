<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import Badge from '../../../components/badge.svelte';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div>
		{data.params.slug}
	</div>
	<div class="posts">
		{#each data.posts as post}
			<div class="post">
				<div class="title-group">
					<h2 class="title"><a href={post.slug}>{post.title}</a></h2>
					<p class="description">{post.description}</p>
					<p class="tags">
						{#each post.categories as category}
							<Badge>{category}</Badge>
						{/each}
					</p>
				</div>
				<div class="date">{formatDate(post.date)}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.posts {
		display: grid;
	}

	.post {
		display: flex;
		flex-direction: column;
	}
	.post:first-child > .title-group {
		padding-top: 0;
	}
	.post:not(:last-child) {
		border-bottom: 1px solid var(--muted);
	}

	.title-group {
		padding: 1.5rem 0;
	}
	.title {
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
		margin: 1rem 0 0;
		color: var(--text-2);
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin: 0.5rem 0 0;
	}
	.date {
		color: var(--text-2);
		font-size: 0.875rem;
		padding: 0 0 1.5rem;
	}
</style>
