<script>
  export let linkRef;
  let hovering = false;

  const handleMouseOver = () => {
    hovering = true;
  };
  const handleMouseLeave = () => {
    hovering = false;
  };
</script>

<style>
  a {
    position: relative;
    display: inline-block;
  }
  img {
    position: absolute;
    top: 80%;
    left: 80%;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.24);
  }
</style>

<a
  on:mouseover={handleMouseOver}
  on:mouseleave={handleMouseLeave}
  href="/projects/{linkRef.slug.current}">
  <slot />
  {#if hovering && linkRef.preview}
    <img
      width="100"
      src={linkRef.preview.url}
      alt="Thumbnail image showing {linkRef.title}" />
  {/if}
</a>
