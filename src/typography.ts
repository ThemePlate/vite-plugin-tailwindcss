import { getName, getValues } from './common';

import type { Mode } from './common';

type TWFont = {
	[ key: string ]: string | string[];
}

type WPFont = {
	name: string;
	slug: string;
	fontFamily: string;
}

export default function getFonts( mode: Mode ): WPFont[] {
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
}
