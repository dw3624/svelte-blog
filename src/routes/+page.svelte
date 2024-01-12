<script lang="ts">
  import * as config from "$lib/config";
  import PostCard from "../components/post-card.svelte";

  export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <h1>Posts</h1>
  <hr />
  <div class="content">
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </div>
</section>

<style>
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
