import { getValues } from './common';

import type { Mode } from './common';

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

export const getColors = ( mode: Mode ): WPColor[] => {
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

	return transform( getValues( 'colors', mode ) );
}

export const getGradients = ( mode: Mode ): WPGradient[] => {
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

	return transform( getValues( 'backgroundImage', mode ) );
}
