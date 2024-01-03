<script lang="ts">
  import "./prose.css";
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
    padding: 2rem 0;
    border-bottom: 1px solid hsl(var(--border));
  }
  .date {
    color: hsl(var(--muted-foreground));
    font-size: var(--font-sm);
    margin-bottom: 0.5rem;
  }
  .title {
    font-weight: 800;
    font-size: var(--font-3xl);
    line-height: 2.5rem;
    scroll-margin: 5rem;
  }
  .tags {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
  }

  .prose {
    padding: 2rem 0 3rem;
  }
</style>
