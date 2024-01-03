<script lang="ts">
  import "../global.css";
  import "../app.css";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
</script>

<Header />
<div class="container">
  <main>
    <div>
      <slot />
    </div>
  </main>
  <Footer />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
  main > div {
    max-width: 48rem;
    padding: 0 1.5rem;
    margin: 3.5rem auto 0;
  }
</style>
