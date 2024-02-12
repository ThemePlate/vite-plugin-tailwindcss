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
	return Object.keys( colors ).flatMap( ( key ) => {
		const value = colors[ key ];
		const newPath = [ ...path, key ];

		if ( 'string' !== typeof value ) {
			return transformColors( value, newPath );
		}

		return {
			name: getName( newPath.join( ' ' ) ),
			slug: newPath.join( '-' ).toLowerCase(),
			color: value,
		};
	} );
}

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

export const capitalizeDirections = ( str: string ) => {
	return getName(
		str.replace( /to-(tl|tr|bl|br|t|b|l|r)/g, ( match ) => {
			return directions[ match ];
		} )
	);
};

export function isGradient( value: string ): boolean {
	return /^(linear|radial|conic)-gradient\(.+\)$/.test( value );
}

export function transformGradients( values: TWGradient ): WPGradient[] {
	return Object.keys( values ).filter( ( key ) => {
		return isGradient( values[ key ] );
	} ).map( ( key ) => {
		return {
			name: capitalizeDirections( key ),
			slug: key.toLowerCase(),
			gradient: values[ key ],
		};
	} );
}
