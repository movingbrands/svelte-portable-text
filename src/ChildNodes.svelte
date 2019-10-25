<script>
  import blockComponents from "./defaultBlocks";
  export let childNodes = [];
  export const assignProps = childNode =>
    childNode.props && !!childNode.component ? childNode.props : {};
</script>

{#each childNodes as childNode}
  {#if typeof childNode === 'string'}{childNode}{/if}
  {#if childNode.childNodes}
    <svelte:component
      this={childNode.component || blockComponents(childNode.tag)}
      {...assignProps(childNode)}>
      <svelte:self childNodes={childNode.childNodes} />
    </svelte:component>
  {/if}
{/each}
