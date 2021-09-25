<script>
  import ChildNodes from "./ChildNodes.svelte";
  import blockComponents from "./defaultBlocks";
  export let childNodes = [];
  export let tag;
  export let component;
  export let props = {};
</script>

{#if tag || component}
  <svelte:component this={component || blockComponents(tag)} {...props}>
    <ChildNodes {childNodes} />
  </svelte:component>
{:else}
  <ChildNodes {childNodes} />
{/if}
