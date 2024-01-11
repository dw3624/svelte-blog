<script>
  import * as config from "$lib/config";
  import { IconSunMoon } from "@tabler/icons-svelte";

  const toggle = () => {
    window.document.body.classList.toggle("dark");
  };
</script>

<header>
  <div class="container">
    <div class="content">
      <a href="/" class="logo">
        <span class="title">{config.title}</span>
      </a>
      <nav class="menu">
        <a href="/tags">tags</a>
      </nav>
    </div>

    <nav>
      <button on:click={toggle} class="toggle-btn">
        <IconSunMoon size={16} />
      </button>
    </nav>
  </div>
</header>

<style>
  header {
    width: 100%;
    max-width: 48rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .container {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
  }

  .content {
    display: flex;
    gap: 2.5rem;
    text-transform: capitalize;
  }

  a {
    text-decoration: inherit;
    line-height: 1.25rem;
    color: hsl(var(--foreground) / 60%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    display: inline-block;
    font-weight: 700;
  }

  .toggle-btn {
    cursor: pointer;
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: calc(var(--radius) - 2px);
    height: 2.25rem;
    width: 2.25rem;
    transition: 0.15s ease-in-out;

    &:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  }
</style>
