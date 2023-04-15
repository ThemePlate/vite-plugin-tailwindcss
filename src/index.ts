import resolveConfig from 'tailwindcss/resolveConfig';
import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import type { Plugin } from 'vite';

type TWColor = {
	[ key: string ]: string | TWColor;
}

type WPColor = {
	name: string;
	slug: string;
	color: string;
}

const tailwindConfigFile = resolve( process.cwd(), 'tailwind.config.js' );
const themeJsonFile = resolve( process.cwd(), 'theme.json' );

export default function tpTailwindCss(): Plugin {
	return {
		name: 'tp-tailwindcss',
		enforce: 'post',
		apply: 'build',

		writeBundle() {
			if ( ! existsSync( tailwindConfigFile ) || ! existsSync( themeJsonFile ) ) {
				return;
			}

			const themeJsonContent = require( themeJsonFile );
			const fullTailwindConfig = resolveConfig( require( tailwindConfigFile ) );

			const getColors = (): WPColor[] => {
				function transform( colors: TWColor, path: string | readonly string[] = [] ): WPColor[] {
					return Object.entries( colors ).flatMap( ( [ key, value ] ) => {
						if ( 'string' !== typeof value ) {
							return transform( value, [ ...path, key ] );
						}

						return {
							name: [ ...path, key ].map( label => `${ label.charAt( 0 ).toUpperCase() }${ label.slice( 1 ) }` ).join( ' ' ),
							slug: [ ...path, key ].join( '-' ).toLowerCase(),
							color: value,
						};
					} );
				}

				return transform( fullTailwindConfig.theme?.colors! );
			}

			writeFileSync(
				themeJsonFile,
				JSON.stringify(
					{
						...themeJsonContent,
						settings: {
						...themeJsonContent?.settings,
								color: {
							...themeJsonContent.settings?.color,
									palette: getColors()
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
