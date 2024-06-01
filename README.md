## Introduction

This is my online cv (portfolio) page: TypeScript, Vite, React, and github pages.

## Deployment

Most of these React supporting metaframeworks seem to use absolute paths which may case some problems.

Hosting on github pages without a custom domain demands setting `base` to the github repo name with proper slashes inside `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cv/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // You can add more configuration options here
});
```

Github pages with a custom domain may require `base` to be removed.

## Warning About Astro

I tried Astro instead of Vite previously, and Astro was messing up paths with `npm run build`. The only way to get it right was to edit the `dist` files manually after the build.

Whatever these frameworks generate, for the github pages with no custom domain to work, `dist/index.html` should have absolute paths such as:

```html
<script type="module" crossorigin src="/cv/assets/index-C4HptKlK.js"></script>
<link rel="stylesheet" crossorigin href="/cv/assets/index-W54NxveC.css">
```

Notice the forward slash and the repo name. There will also be Js files inside folders such as `assets` with relative paths such as `src:"assets/rg.jpg"` which seem to be correct. Absolute paths `/cv/assets/rg.jpg` should also work. 

Vite gets it right automatically with `base`, but in the Astro "static" mode I was not able to get all the paths right by setting `site` and `base` inside astro.config.mjs alone. There are a lot of related closed github issues in Astro which are not helpful for hosting with github pages.

## References

[Forrest Knight. minimal-portfolio. 2022.](https://github.com/ForrestKnight/minimal-portfolio)

[Coby Chapple. Deploying a subfolder to GitHub Pages. 2022](https://gist.github.com/cobyism/4730490)
