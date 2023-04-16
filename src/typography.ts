import { getName, getValues } from './common';

import type { Mode } from './common';

type TWFont = {
	[ key: string ]: string | string[];
}

type TWSize = {
	[ key: string ]:
		| string
		| [ fontSize: string, lineHeight: string ]
		| [
		fontSize: string,
		config: Partial<{
			lineHeight: string;
			letterSpacing: string;
			fontWeight: string;
		}>
	];
}

type WPFont = {
	name: string;
	slug: string;
	fontFamily: string;
}

type WPSize = {
	name: string;
	slug: string;
	size: string;
}

export const getFonts = ( mode: Mode ): WPFont[] => {
	function transform( fonts: TWFont ): WPFont[] {
		const face = ( str: string ) => {
			str = str.split( ',' ).shift()!;

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

	return transform( getValues( 'fontFamily', mode ) );
};

export const getSizes = ( mode: Mode ): WPSize[] => {
	function transform( fonts: TWSize ): WPSize[] {
		const normalize = ( str: string ) => {
			str = str.replace( /xs|sm|md|lg|xl/g, ( match ) => {
				const directions: {
					[ key: string ]: string;
				} = {
					'xs': 'Extra Small',
					'sm': 'Small',
					'md': 'Medium',
					'lg': 'Large',
					'xl': 'Extra Large',
				};

				return directions[ match ];
			} );

			return getName( str );
		};

		return Object.entries( fonts ).flatMap( ( [ key, value ] ) => {
			return {
				name: normalize( key ),
				slug: key.toLowerCase(),
				size: Array.isArray( value ) ? value[ 0 ] : value,
			};
		} );
	}

	return transform( getValues( 'fontSize', mode ) );
};
