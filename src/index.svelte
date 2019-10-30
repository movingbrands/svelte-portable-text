<script>
  import blockContentToNodes from "./blockContentToNodes";
  import ChildNode from "./ChildNode.svelte";

  export let blocks = [];
  export let serializers = {};

  export const converted = blockContentToNodes({
    blocks,
    serializers
  });
</script>

<ChildNode {...converted} />
{#if converted.childNodes}
  {#each converted.childNodes as childNode}
    {#if childNode}
      <ChildNode {...childNode} />
    {/if}
  {/each}
{/if}
