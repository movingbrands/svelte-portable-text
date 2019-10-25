# block-content-to-svelte-example

```svelte
<script>
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

Your package.json has a `"svelte"` field pointing to `src/index.svelte`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
