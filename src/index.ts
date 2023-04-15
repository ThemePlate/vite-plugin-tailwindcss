import resolveConfig from 'tailwindcss/resolveConfig';
import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import type { Plugin } from 'vite';

type TWColor = {
	[ key: string ]: string | TWColor;
}

type TWGradient = {
	[ key: string ]: string;
}

type WPColor = {
	name: string;
	slug: string;
	color: string;
}

type WPGradient = {
	name: string;
	slug: string;
	gradient: string;
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

			const getGradients = (): WPGradient[] => {
				function transform( values: TWGradient ): WPGradient[] {
					return Object.entries( values ).flatMap( ( [ key, value ] ) => {
						return {
							name: key.split( '-' ).map( label => `${ label.charAt( 0 ).toUpperCase() }${ label.slice( 1 ) }` ).join( ' ' ),
							slug: key.toLowerCase(),
							gradient: value,
						};
					} ).filter( ( { gradient } ) => {
						function isGradient( value: string ): boolean {
							return /^linear-gradient\(/.test( value ) || /^radial-gradient\(/.test( value ) || /^conic-gradient\(/.test( value );
						}

						return isGradient( gradient );
					} );
				}

				return transform( fullTailwindConfig.theme?.backgroundImage! );
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
									gradients: getGradients(),
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
