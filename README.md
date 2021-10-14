# svelte-portable-text

Forked version of `@movingbrands/svelte-portable-text`, until that package is updated/maintained. If that is never the case, I will look into maintaining this full-time once I have time and get a slightly better understanding of the Svelte ecosystem.

Note: this package is in active development, will likely change and may contain errors.

## Install
This is currently only available off GitHub Packages as I don't have the time to maintain it properly (and it might be picked up by the original owner again). You're welcome to use it in your own projects until then however. :)

At the moment, it seems the best approach is to install [@sanity/block-content-to-hyperscript](https://github.com/sanity-io/block-content-to-hyperscript/) alongside this component.

Installing Svelte components as a `devDependency` seems to address [this issue](https://github.com/sveltejs/sapper/issues/774).

### Usage example

```svelte
<script>
  import BlockContent from "@jcamilleri13/svelte-portable-text";

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

### With Svelte apps (recommended approach)
This package.json has a `"svelte"` field pointing to `src/index.svelte`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/rollup/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`).

### Apps which aren't using Svelte elsewhere
`npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`).
