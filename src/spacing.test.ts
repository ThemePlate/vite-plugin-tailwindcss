import { describe, it } from 'vitest';

import type { TWSpace } from './spacing';
import { transformSpacings } from './spacing';

const mockSpacing: TWSpace = {
	'px': '1px',
	1: '1rem',
	2: '2%',
};

describe( 'spacing', () => {
	it( 'should return the correct spacing object', ( { expect } ) => {
		expect( transformSpacings( mockSpacing ) ).toStrictEqual( [
			{
				name: '1',
				slug: '1',
				size: '1rem',
			},
			{
				name: '2',
				slug: '2',
				size: '2%',
			},
			{
				name: 'PX',
				slug: 'px',
				size: '1px',
			},
		] );
	} );
} );
