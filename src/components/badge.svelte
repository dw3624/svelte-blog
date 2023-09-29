<script>
	export let href = '#';
</script>

<a {href}>
	<div>
		<slot />
	</div>
</a>

<style>
	a {
		display: contents;
	}

	div {
		display: inline-flex;
		align-items: center;
		border-width: 1px;
		padding: 0.125rem 0.625rem;
		font-size: var(--font-xs);
		font-weight: 600;
		line-height: 1rem;
		transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
			transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		outline: 2px solid transparent;
		outline-offset: 2px;

		/* background-color: var(--background);
		color: var(--brand); */
		background-color: var(--brand);
		color: var(--background);
		border: 1px solid var(--brand);
		border-radius: 0.25rem;
		margin-right: 0.25rem;
	}

	div:hover {
		background-color: var(--brand);
		color: var(--background);
		opacity: 0.6;
	}
</style>
