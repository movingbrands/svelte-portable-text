import h1 from './h1.svelte'
import h2 from './h2.svelte'
import h3 from './h3.svelte'
import h4 from './h4.svelte'
import h5 from './h5.svelte'
import h6 from './h6.svelte'
import strong from './strong.svelte'
import em from './em.svelte'
import p from './p.svelte'
import span from './span.svelte'
import blockquote from './blockquote.svelte'
import normal from './normal.svelte'
import ul from './ul.svelte'
import ol from './ul.svelte'
import li from './li.svelte'

export const Components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  em,
  strong,
  normal,
  ol,
  blockquote,
  ul,
  li
}

export default component =>
  typeof Components[component] !== "undefined" ? Components[component] : false
