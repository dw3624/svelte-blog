<script>
  export let href = "";
</script>

<a {href} class="badge">
  <slot />
</a>

<style>
  .badge {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    font-size: var(--text-xs);
    font-weight: 600;
    line-height: 1rem;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.2s;
    outline: 2px solid transparent;
    outline-offset: 2px;
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    border: 1px solid transparent;
    border-radius: calc(var(--radius) - 2px);
    white-space: nowrap;
    padding: 0.125em 0.625em;
  }

  .badge:hover {
    background-color: hsl(var(--primary) / 0.8);
  }
</style>
