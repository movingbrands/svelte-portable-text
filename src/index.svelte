<script>
  import blockContentToNodes from "./blockContentToNodes";
  import ChildNode from "./ChildNode.svelte";

  export let blocks = [];
  export let serializers = {};

  $: converted = blockContentToNodes({
    blocks,
    serializers
  });
</script>

{#if converted.childNodes.length === 1}
  <ChildNode {...converted} />
{:else}
  {#each converted.childNodes as childNode}
    {#if childNode}
      <ChildNode {...childNode} />
    {/if}
  {/each}
{/if}
