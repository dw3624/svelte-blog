<script>
  import * as config from "$lib/config";
  const toggle = () => {
    window.document.body.classList.toggle("dark");
  };
</script>

<header>
  <div>
    <nav>
      <a href="/" class="logo"> <b>{config.title}</b></a>
      <ul>
        <li><a href="/tags">tags</a></li>
      </ul>
    </nav>
    <button on:click={toggle}>toggle</button>
  </div>
</header>

<style>
  header {
    padding: 0 1.5rem;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: hsl(var(--background) / 0.6);
    z-index: 999;
    backdrop-filter: blur(8px);
    border-bottom: 1px solid hsl(var(--border) / 0.4);
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
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
    text-underline-offset: 4px;
  }

  ul {
    display: flex;
    gap: 0.875rem;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: var(--font-sm);
  }
</style>
