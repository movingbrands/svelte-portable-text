//
import h1 from './h1.svelte'
import h2 from './h2.svelte'
import h3 from './h3.svelte'
import h4 from './h4.svelte'
import h5 from './h5.svelte'
import h6 from './h6.svelte'
import p from './p.svelte'
import code from './code.svelte'

//
import a from './a.svelte'
import span from './span.svelte'
import normal from './normal.svelte'

//
import ul from './ul.svelte'
import ol from './ol.svelte'
import li from './li.svelte'

//
import blockquote from './blockquote.svelte'
import strong from './strong.svelte'
import em from './em.svelte'
import u from './u.svelte'
import del from './del.svelte'
import br from './br.svelte'

//
import figure from './figure.svelte'
import img from './img.svelte'

export const Components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  code,
  a,
  span,
  normal,
  ul,
  ol,
  li,
  blockquote,
  strong,
  em,
  u,
  del,
  br,
  figure,
  img
}

export default component =>
  typeof Components[component] !== "undefined" ? Components[component] : false
