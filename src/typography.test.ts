import { describe, it } from 'vitest';

import type { TWFont, TWSize } from './typography';
import { transformFonts, transformSizes } from './typography';

const mockFonts: TWFont = {
	'string': 'ui-serif',
	'string2': 'ui-sans-serif, sans-serif',
	'array': [
		'Roboto',
		'system-ui'
	],
};

const mockSizes: TWSize = {
	'string': '12px',
	'array': [ '1rem', '1.5' ],
	'config': [ '6cm', {
		lineHeight: '1.5'
	} ],
};

describe( 'font', () => {
	it( 'should return the correct font object', ( { expect } ) => {
		expect( transformFonts( mockFonts ) ).toStrictEqual( [
			{
				name: 'UI Serif',
				slug: 'string',
				fontFamily: 'ui-serif',
			},
			{
				name: 'UI Sans Serif',
				slug: 'string2',
				fontFamily: 'ui-sans-serif, sans-serif',
			},
			{
				name: 'Roboto',
				slug: 'array',
				fontFamily: 'Roboto,system-ui',
			},
		] );
	} );
} );

describe( 'gradients', () => {
	it( 'should return the correct gradient object', ( { expect } ) => {
		expect( transformSizes( mockSizes ) ).toStrictEqual( [
			{
				name: 'String',
				slug: 'string',
				size: '12px',
			},
			{
				name: 'Array',
				slug: 'array',
				size: '1rem',
			},
			{
				name: 'Config',
				slug: 'config',
				size: '6cm',
			},
		] );
	} );
} );
