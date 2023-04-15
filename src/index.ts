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
			const localTailwindConfig = require( tailwindConfigFile );
			const fullTailwindConfig = resolveConfig( localTailwindConfig );

			const getValues = ( key: string ) => {
				if ( 'custom' === mode ) {
					return localTailwindConfig.theme.extend[ key ] ?? {};
				}

				return fullTailwindConfig.theme[ key ] ?? {};
			}

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

				return transform( getValues( 'colors' ) );
			}

			const getGradients = (): WPGradient[] => {
				function transform( values: TWGradient ): WPGradient[] {
					const capitalize = ( str: string ) => {
						str = str.replace( /to-(tl|tr|bl|br|t|b|l|r)/g, ( match ) => {
							const directions: {
								[ key: string ]: string;
							} = {
								'to-l' : 'to Left',
								'to-r' : 'to Right',
								'to-t' : 'to Top',
								'to-b' : 'to Bottom',
								'to-tl': 'to TopLeft',
								'to-tr': 'to TopRight',
								'to-bl': 'to BottomLeft',
								'to-br': 'to BottomRight',
							};

							return directions[ match ];
						} );

						return str.split( '-' ).map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) ).join( ' ' );
					}

					return Object.entries( values ).flatMap( ( [ key, value ] ) => {
						return {
							name: capitalize( key ),
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

				return transform( getValues( 'backgroundImage' ) );
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
