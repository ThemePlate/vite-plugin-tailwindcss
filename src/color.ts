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
