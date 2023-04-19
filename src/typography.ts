import { getName, getValues } from './common';

import type { Mode, TWBase, WPBase } from './common';

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

export function transformFonts( fonts: TWFont ): WPFont[] {
	const face = ( str: string ) => {
		str = str.replace( 'ui-', 'UI-' ).split( ',' ).shift()!;

		return getName( str );
	};

	return Object.entries( fonts ).flatMap( ( [ key, value ] ) => {
		const fontFamily = Array.isArray( value ) ? value.join( ',' ) : value;

		return {
			name: face( fontFamily ),
			slug: key.toLowerCase(),
			fontFamily,
		};
	} );
}

export const getFonts = ( mode: Mode ): WPFont[] => {
	return transformFonts( getValues( 'fontFamily', mode ) );
};

export const normalizeBreakpoints = ( str: string ) => {
	str = str.replace( /xs|sm|md|lg|xl/g, ( match ) => {
		const breakpoints: {
			[ key: string ]: string;
		} = {
			'xs': 'Extra Small',
			'sm': 'Small',
			'md': 'Medium',
			'lg': 'Large',
			'xl': 'Extra Large',
		};

		return ` ${ breakpoints[ match ] }`;
	} );

	return getName( str.trim() );
};

export function transformSizes( fonts: TWSize ): WPSize[] {
	return Object.entries( fonts ).flatMap( ( [ key, value ] ) => {
		return {
			name: normalizeBreakpoints( key ),
			slug: key.toLowerCase(),
			size: Array.isArray( value ) ? value[ 0 ] : value,
		};
	} );
}

export const getSizes = ( mode: Mode ): WPSize[] => {
	return transformSizes( getValues( 'fontSize', mode ) );
};
