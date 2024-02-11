import { describe, it } from 'vitest';

import type { TWFont, TWSize } from './typography';
import { normalizeBreakpoints, transformFonts, transformSizes } from './typography';

const mockFonts: TWFont = {
	'string': 'ui-serif',
	'string2': 'ui-sans-serif, sans-serif',
	'quoted': '"Mulish", sans-serif',
	'quoted2': "'Averia Libre', serif",
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
				name: 'Mulish',
				slug: 'quoted',
				fontFamily: '"Mulish", sans-serif',
			},
			{
				name: 'Averia Libre',
				slug: 'quoted2',
				fontFamily: "'Averia Libre', serif",
			},
			{
				name: 'Roboto',
				slug: 'array',
				fontFamily: 'Roboto, system-ui',
			},
		] );
	} );
} );

describe( 'breakpoints', () => {
	it( 'should return correct breakpoint', ( { expect } ) => {
		expect( normalizeBreakpoints( 'xs' ) ).toBe( 'Extra Small' );
		expect( normalizeBreakpoints( 'sm' ) ).toBe( 'Small' );
		expect( normalizeBreakpoints( 'md' ) ).toBe( 'Medium' );
		expect( normalizeBreakpoints( 'lg' ) ).toBe( 'Large' );
		expect( normalizeBreakpoints( 'xl' ) ).toBe( 'Extra Large' );
	} );
} );

describe( 'sizes', () => {
	it( 'should return the correct size object', ( { expect } ) => {
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
