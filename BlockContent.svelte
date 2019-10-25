<script>
  import blockComponents from "./blocks";
  export let blocks;
  export let markDefs = [];

  export const iterateBlockMarks = block => {
    const targetMark = block.marks[0];

    // check to see if we've got a custom markDef
    const targetMarkDef = markDefs.find(({ _key }) => _key === targetMark);

    return [Object.assign({}, block, {
        _type: targetMark,
        // removing the active mark [0] from the array
        marks: block.marks.filter(m => m !== targetMark),
        // if we've got a custom markDef, add its attributes to the block
        ...(targetMarkDef && targetMarkDef)
      })];
  };
</script>

{#each blocks as block}
  <!-- if we encounter a block with children, pass the children back through the same component recursively -->
  {#if block._type === 'block'}
    <!-- apply the parent style to the collection of children first -->
    <svelte:component this={blockComponents(block.style)}>
      <svelte:self blocks={block.children} markDefs={block.markDefs} />
    </svelte:component>
  {/if}

  <!-- let's add custom markDefs or stylistic markup in to the mix -->
  <!-- this goes through them iteratively and recursively -->
  {#if block.marks && block.marks.length > 0}
    <svelte:self blocks={iterateBlockMarks(block)} />
  {:else}
    <!-- finally we render a component from our library -->
    <svelte:component this={blockComponents(block._type)} {...block}>
      {block.text}
    </svelte:component>
  {/if}
{/each}

<!-- 
    todo: at the render step above, it's probably not great to sending the attributes
    through to every component with {...block}.
    
    A series of if statements is probably cleaner, e.g.:

    {#if block._type === 'video'}
      <svelte:component this={blockComponents(block._type)} url={block.url} />
    {:else if block._type === 'image'}
      ...
    {/if}
-->
