<script lang="ts">
	import Badge from '../../components/badge.svelte';

	export let data;
</script>

<section>
	<h1>Tags</h1>
	<div class="tags">
		{#each data.tags as tag}
		<Badge href={`/tags/${tag}`}>{tag}</Badge>
		{/each}
	</div>
</section>

<style>
	h1 {
		margin-top: 0;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
	}
</style>
