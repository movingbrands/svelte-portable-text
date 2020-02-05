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

{#if converted.childNodes && converted.childNodes.length === 1}
  <ChildNode {...converted} />
{:else}
  <ChildNode {...converted} />
  {#each converted.childNodes as childNode}
    {#if childNode}
      <ChildNode {...childNode} />
    {/if}
  {/each}
{/if}
