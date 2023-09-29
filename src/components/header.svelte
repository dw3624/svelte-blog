<script>
	import * as config from '$lib/config';
</script>

<div>
	<header>
		<nav>
			<a href="/" class="logo"> <b>{config.title}</b></a>
			<ul>
				<li><a href="/tags">tags</a></li>
			</ul>
		</nav>
		<!-- <button>toggle</button> -->
	</header>
</div>

<style>
	div {
		padding: 0 1.5rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: var(--background);
		z-index: 999;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 3.5rem;
		max-width: 64rem;
		margin: 0 auto;
		border-bottom: 0px solid var(--text-1);
		text-transform: uppercase;
	}

	nav {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: baseline;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	ul {
		display: flex;
		gap: 0.875rem;
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: var(--font-sm);
	}
	li {
		color: rgba(var(--text-1), 0.6);
	}
</style>
