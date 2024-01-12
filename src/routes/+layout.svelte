<script lang="ts">
  import "../styles/global.css";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
</script>

<div class="container">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    width: 100%;
    max-width: 48rem;
    margin: 0 auto;
    padding: 1.5rem 2rem;
  }

  /* @media screen and (1280px <= width) {
    main {
      max-width: 64rem;
    }
  } */
</style>
