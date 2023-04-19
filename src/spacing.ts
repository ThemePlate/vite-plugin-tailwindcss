import { getName, getValues } from './common';

import type { Mode, TWBase, WPBase } from './common';

export type TWSpace = TWBase<string>

export type WPSpace = WPBase & {
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
