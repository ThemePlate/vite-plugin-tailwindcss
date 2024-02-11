import { getName } from './common';

import type { TWBase, WPBase } from './common';

export type TWColor = TWBase<string | TWBase<string>>

export type TWGradient = TWBase<string>

export type WPColor = WPBase & {
	color: string;
}

export type WPGradient = WPBase & {
	gradient: string;
}

export function transformColors( colors: TWColor, path: string | string[] = [] ): WPColor[] {
	return Object.entries( colors ).flatMap( ( [ key, value ] ) => {
		if ( 'string' !== typeof value ) {
			return transformColors( value, [ ...path, key ] );
		}

		return {
			name: getName( [ ...path, key ].join( ' ' ) ),
			slug: [ ...path, key ].join( '-' ).toLowerCase(),
			color: value,
		};
	} );
}

export const capitalizeDirections = ( str: string ) => {
	str = str.replace( /to-(tl|tr|bl|br|t|b|l|r)/g, ( match ) => {
		const directions: {
			[ key: string ]: string;
		} = {
			'to-l': 'to Left',
			'to-r': 'to Right',
			'to-t': 'to Top',
			'to-b': 'to Bottom',
			'to-tl': 'to TopLeft',
			'to-tr': 'to TopRight',
			'to-bl': 'to BottomLeft',
			'to-br': 'to BottomRight',
		};

		return directions[ match ];
	} );

	return getName( str );
};

export function isGradient( value: string ): boolean {
	return /^linear-gradient\(/.test( value ) || /^radial-gradient\(/.test( value ) || /^conic-gradient\(/.test( value );
}

export function transformGradients( values: TWGradient ): WPGradient[] {
	return Object.entries( values ).flatMap( ( [ key, value ] ) => {
		return {
			name: capitalizeDirections( key ),
			slug: key.toLowerCase(),
			gradient: value,
		};
	} ).filter( ( { gradient } ) => {
		return isGradient( gradient );
	} );
}
