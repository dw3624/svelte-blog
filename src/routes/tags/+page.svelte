<script lang="ts">
  import Badge from "../../components/badge.svelte";

  export let data;
</script>

<section>
  <h1>Tags</h1>
  <hr />
  <div class="content">
    {#each data.tags as tag}
      <Badge href={`/tags/${tag}`}>{tag}</Badge>
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
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
