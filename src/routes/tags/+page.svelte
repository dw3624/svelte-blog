<script lang="ts">
	import Badge from '../../components/badge.svelte';

	export let data;
</script>

<div class="tags">
	{#each data.tags as tag}
		<Badge>{tag}</Badge>
	{/each}
</div>

<style>
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin: 0.5rem 0 0;
	}
</style>
