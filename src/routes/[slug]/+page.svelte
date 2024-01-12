<script lang="ts">
  import { formatDate } from "$lib/utils";
  import Badge from "../../components/badge.svelte";

  export let data;
  console.log(data);
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <header>
    <time datetime={data.meta.date}>{formatDate(data.meta.date)}</time>
    <h1 class="title">{data.meta.title}</h1>
    <div class="tags">
      {#each data.meta.tags as tag}
        <Badge href={`/tags/${tag}`}>{tag}</Badge>
      {/each}
    </div>
  </header>

  <div class="container">
    <div class="prose">
      <svelte:component this={data.content} />
    </div>
    <!-- <aside>aside</aside> -->
  </div>
</article>

<style>
  time {
    display: block;
    color: hsl(var(--muted-foreground));
    font-size: var(--text-sm);
    line-height: 1.25rem;
  }

  .title {
    margin-top: 0.5rem;
    display: inline-block;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .prose {
    padding: 2rem 0;
  }

  /* aside {
    display: none;
  } */

  /* @media screen and (1280px <= width) {
    .container {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      column-gap: 1.5rem;
    }

    .prose {
      grid-column: span 3 / auto;
    }

    aside {
      display: block;
    }
  } */
</style>
