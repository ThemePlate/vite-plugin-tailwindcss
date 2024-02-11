import { defineConfig } from 'vite';
import tpTailwindCss from '../../src/index';

export default defineConfig( {
  plugins: [
    tpTailwindCss( 'full' ),
  ],
} );
