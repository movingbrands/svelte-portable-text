<script>
  import blockContentToNodes from "./blockContentToNodes";
  import ChildNode from "./ChildNode.svelte";
  import ChildNodes from "./ChildNodes.svelte";

  export let blocks = [];
  export let serializers = {};

  export const removeChildNodes = obj => {
    const result = Object.assign({}, obj);
    delete result.childNodes;
    return result;
  };

  $: converted = blockContentToNodes({
    blocks,
    serializers
  });
</script>

{#if blocks.length === 1}
  <ChildNode {...converted} />
{:else}
  <ChildNodes childNodes={converted.childNodes} />
{/if}
