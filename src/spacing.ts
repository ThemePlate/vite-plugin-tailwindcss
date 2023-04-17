import { getName, getValues } from './common';

import type { Mode } from './common';

type TWSpace = {
	[ key: string ]: string;
}

type WPSpace = {
	name: string;
	slug: string;
	size: string;
}

export const getSpacings = ( mode: Mode ): WPSpace[] => {
	function transform( spaces: TWSpace ): WPSpace[] {
		return Object.entries( spaces ).flatMap( ( [ key, value ] ) => {
			return {
				name: getName( key ),
				slug: key.toLowerCase(),
				size: value,
			};
		} );
	}

	return transform( getValues( 'spacing', mode ) );
};
