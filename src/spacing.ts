import { getName, getValues } from './common';

import type { Mode } from './common';

export type TWSpace = {
	[ key: string ]: string;
}

export type WPSpace = {
	name: string;
	slug: string;
	size: string;
}

export function transformSpacings( spaces: TWSpace ): WPSpace[] {
	return Object.entries( spaces ).flatMap( ( [ key, value ] ) => {
		if ( 'px' === key ) {
			key = 'PX';
		}

		return {
			name: getName( key ),
			slug: key.toLowerCase(),
			size: value,
		};
	} );
}

export const getSpacings = ( mode: Mode ): WPSpace[] => {
	return transformSpacings( getValues( 'spacing', mode ) );
};
