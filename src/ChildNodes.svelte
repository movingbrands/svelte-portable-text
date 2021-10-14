<script>
  import blockComponents from "./defaultBlocks";
  export let childNodes = [];
  export const assignProps = childNode =>
    childNode.props && !!childNode.component ? childNode.props : {};
</script>

{#each childNodes as childNode}
  {#if typeof childNode === 'string'}{childNode.trim()}{/if}
  <svelte:component
    this={childNode.component || blockComponents(childNode.tag)}
    {...(childNode.props ?? {})}
  >
    {#if childNode.childNodes}
      <svelte:self childNodes={childNode.childNodes} />
    {/if}
  </svelte:component>
{/each}
