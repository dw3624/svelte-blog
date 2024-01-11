<script lang="ts">
  import * as config from "$lib/config";
  import PostCard from "../../../components/post-card.svelte";

  export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <h1>
    Tag : <span class="tag-name">{data.params.slug}</span>
  </h1>
  <hr />
  <div class="content">
    {#each data.tag_posts as post}
      <PostCard {post} />
    {/each}
  </div>
</section>

<style>
  .tag-name {
    color: hsl(var(--primary));
  }

  hr {
    height: 0;
    margin: 2rem 0;
    border-top: 1px solid hsl(var(--border));
  }

  .content {
    display: grid;
    gap: 2.5rem;
  }
</style>
