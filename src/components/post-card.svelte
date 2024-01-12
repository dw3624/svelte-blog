<script lang="ts">
  import { formatDate } from "$lib/utils";
  import Badge from "./badge.svelte";

  export let post: {
    title: string;
    description: string | null;
    date: string;
    tags: string[];
    published: boolean;
    slug: string;
  };
</script>

<article>
  <time>{formatDate(post.date)}</time>
  <h3 class="title"><a href={`/${post.slug}`}>{post.title}</a></h3>
  <p class="description">{post.description || ""}</p>
  <div class="tags">
    {#each post.tags as tag}
      <Badge href={`/tags/${tag}`}>{tag}</Badge>
    {/each}
  </div>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
  }

  time {
    color: hsl(var(--muted-foreground));
    font-size: var(--text-sm);
    line-height: normal;
    margin-bottom: 0.25rem;
  }

  .title {
    line-height: normal;
  }

  .description {
    color: hsl(var(--muted-foreground));
    margin-top: 0.5rem;
    line-height: normal;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
</style>
