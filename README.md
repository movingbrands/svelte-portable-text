# svelte-portable-text

Note: this package is in active development, will likely change and may contain errors.

## Install
```bash
npm install @movingbrands/svelte-portable-text
```

### Use
```svelte
<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  
  import Image from "./Image";
  import Link from "./Link";

  export let content;
  export const customSerializers = {
    types: {
      image: props => {
        return {
          component: Image,
          childNodes: props.children,
          props: {
            url: props.node.url
          }
        };
      }
    },
    marks: {
      link: props => {
        return {
          component: Link,
          childNodes: props.children,
          props: props.mark
        };
      }
    }
  };
  </script>

  <BlockContent blocks={content} serializers={customSerializers} />
```

## Consuming components

### With Svelte apps
This package.json has a `"svelte"` field pointing to `src/index.svelte`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

### Other JS apps
For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`).
