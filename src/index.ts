import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import { TailwindConfigFile, TailwindCssManager } from './common';
import { transformColors, transformGradients } from './color';
import { transformFonts, transformSizes } from './typography';
import { transformSpacings } from './spacing';

import type { Plugin } from 'vite';
import type { Mode } from './common';

export default function tpTailwindCss( mode: Mode = 'custom' ): Plugin {
	return {
		name: 'tp-tailwindcss',
		enforce: 'post',
		apply: 'build',

		writeBundle() {
			const currentWorkingDirectory = process.cwd();
			const tailwindConfigFile = TailwindConfigFile( currentWorkingDirectory );
			const themeJsonFile = join( currentWorkingDirectory, 'theme.json' );

			if ( '' === tailwindConfigFile || ! existsSync( themeJsonFile ) ) {
				return;
			}

			const tailwindCssManager = new TailwindCssManager( tailwindConfigFile, mode );
			const themeJsonContent = JSON.parse( readFileSync( themeJsonFile ).toString() );

			writeFileSync(
				themeJsonFile,
				JSON.stringify(
					{
						...themeJsonContent,
						settings: {
							...themeJsonContent?.settings,
							color: {
								...themeJsonContent.settings?.color,
								gradients: transformGradients( tailwindCssManager.getValues( 'backgroundImage' ) ),
								palette: transformColors( tailwindCssManager.getValues( 'colors' ) )
							},
							typography: {
								...themeJsonContent.settings?.typography,
								fontSizes: transformSizes( tailwindCssManager.getValues( 'fontSize' ) ),
								fontFamilies: transformFonts( tailwindCssManager.getValues( 'fontFamily' ) ),
							},
							spacing: {
								...themeJsonContent.settings?.spacing,
								spacingSizes: transformSpacings( tailwindCssManager.getValues( 'spacing' ) ),
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
