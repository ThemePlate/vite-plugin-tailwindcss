import { getName } from './common';

import type { TWBase, WPBase } from './common';

export type TWSpace = TWBase<string>

export type WPSpace = WPBase & {
	size: string;
}

export function transformSpacings( spaces: TWSpace ): WPSpace[] {
	return Object.entries( spaces ).map( ( [ key, value ] ) => {
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
