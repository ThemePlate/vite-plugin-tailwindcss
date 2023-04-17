import { existsSync, writeFileSync } from 'fs';

import { tailwindConfigFile, themeJsonFile } from './common';
import { getColors, getGradients } from './color';
import { getFonts, getSizes } from './typography';
import { getSpacings } from './spacing';

import type { Plugin } from 'vite';

export default function tpTailwindCss( mode: 'full' | 'custom' = 'custom' ): Plugin {
	return {
		name: 'tp-tailwindcss',
		enforce: 'post',
		apply: 'build',

		writeBundle() {
			if ( ! existsSync( tailwindConfigFile ) || ! existsSync( themeJsonFile ) ) {
				return;
			}

			const themeJsonContent = require( themeJsonFile );

			writeFileSync(
				themeJsonFile,
				JSON.stringify(
					{
						...themeJsonContent,
						settings: {
							...themeJsonContent?.settings,
							color: {
								...themeJsonContent.settings?.color,
								gradients: getGradients( mode ),
								palette: getColors( mode )
							},
							typography: {
								...themeJsonContent.settings?.typography,
								fontSizes: getSizes( mode ),
								fontFamilies: getFonts( mode )
							},
							spacing: {
								...themeJsonContent.settings?.spacing,
								spacingSizes: getSpacings( mode )
							}
						}
					},
					null,
					2
				),
				'utf8'
			);
		}
	};
}
