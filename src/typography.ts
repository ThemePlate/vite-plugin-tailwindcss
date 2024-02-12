import { getName } from './common';

import type { TWBase, WPBase } from './common';

export type TWFont = TWBase<string | string[]>

export type TWSize = TWBase<
	| string
	| [ fontSize: string, lineHeight: string ]
	| [
	fontSize: string,
	config: Partial<{
		lineHeight: string;
		letterSpacing: string;
		fontWeight: string;
	}>
]
>;

type WPFont = WPBase & {
	fontFamily: string;
}

type WPSize = WPBase & {
	size: string;
}

const face = ( str: string ) => {
	str = str.replace( 'ui-', 'UI-' ).split( ',' ).shift()!;

	return getName( str ).replace( /^['"](.+)['"]$/,'$1' );
};

export function transformFonts( fonts: TWFont ): WPFont[] {
	return Object.entries( fonts ).map( ( [ key, value ] ) => {
		const fontFamily = Array.isArray( value ) ? value.join( ', ' ) : value;

		return {
			name: face( fontFamily ),
			slug: key.toLowerCase(),
			fontFamily,
		};
	} );
}

const breakpoints: {
	[ key: string ]: string;
} = {
	'xs': 'Extra Small',
	'sm': 'Small',
	'md': 'Medium',
	'lg': 'Large',
	'xl': 'Extra Large',
};

export const normalizeBreakpoints = ( str: string ) => {
	return getName(
		str.replace( /xs|sm|md|lg|xl/g, ( match ) => {
			return ` ${ breakpoints[ match ] }`;
		} ).trim()
	);
};

export function transformSizes( fonts: TWSize ): WPSize[] {
	return Object.keys( fonts ).map( ( key ) => {
		const value = fonts[ key ];

		return {
			name: normalizeBreakpoints( key ),
			slug: key.toLowerCase(),
			size: Array.isArray( value ) ? value[ 0 ] : value,
		};
	} );
}
