# ThemePlate Vite TailwindCSS

## Usage

`npm install @themeplate/vite-plugin-tailwindcss`

### vite.config.js

```js
import { defineConfig } from 'vite';
import tpTailwindCss from '@themeplate/vite-plugin-tailwindcss';

export default defineConfig( {
  plugins: [
    tpTailwindCss(/* MODE */),
  ],
} );
```

## Sample

> See `/tests` folder for `custom` and `full` mode
