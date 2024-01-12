<script>
  import * as config from "$lib/config";
  import { IconFish, IconSunMoon } from "@tabler/icons-svelte";

  const toggle = () => {
    window.document.body.classList.toggle("dark");
  };
</script>

<header>
  <div class="container">
    <div class="content">
      <a href="/" class="logo">
        <IconFish size={24} />
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

  /* @media screen and (1280px <= width) {
    header {
      max-width: 64rem;
    }
  } */

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

  .logo {
    color: hsl(var(--primary));
  }

  .title {
    margin-left: 0.5rem;
    display: inline-block;
    font-weight: 700;
  }

  .menu {
    display: flex;
    gap: 1.5rem;
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
    color: hsl(var(--foreground));

    &:hover {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  }
</style>
