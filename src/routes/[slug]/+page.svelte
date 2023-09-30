<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Badge from '../../components/badge.svelte';

	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<div class="date">{formatDate(data.meta.date)}</div>
		<h1 class="title">{data.meta.title}</h1>
		<div class="tags">
			{#each data.meta.tags as tag}
				<Badge href={`/tags/${tag}`}>{tag}</Badge>
			{/each}
		</div>
	</hgroup>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	hgroup {
		padding: 0 0 1.5rem;
		border-bottom: 2px solid var(--text-1);
	}
	.date {
		color: var(--text-2);
		font-size: var(--font-sm);
		margin-bottom: 0.5rem;
	}
	.title {
		font-weight: 800;
		font-size: 2rem;
		line-height: 2.5rem;
		scroll-margin: 5rem;
		margin: 0 0 1.5rem;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
	}

	.prose {
		padding: 3rem 0 3rem;
	}
</style>
