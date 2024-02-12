import { getName } from './common';

import type { TWBase, WPBase } from './common';

export type TWSpace = TWBase<string>

export type WPSpace = WPBase & {
	size: string;
}

export function transformSpacings( spaces: TWSpace ): WPSpace[] {
	return Object.keys( spaces ).map( ( key ) => {
		return {
			name: getName( 'px' === key ? 'PX' : key ),
			slug: key.toLowerCase(),
			size: spaces[ key ],
		};
	} );
}
