import { describe, it } from 'vitest';

import type { TWColor, TWGradient } from './color';
import { capitalizeDirections, isGradient, transformColors, transformGradients } from './color';

const mockPalette: TWColor = {
	'test': '#001122',
	'deep': {
		'color': '#334455',
	},
};

const mockGradients: TWGradient = {
	'value': '#667788',
	'linear': 'linear-gradient( black, white )',
	'radial': 'radial-gradient( red, blue, green )',
	'conic': 'conic-gradient( yellow, gray )',
	'unknown': 'unknown-gradient( this, color )',
};

describe( 'palette', () => {
	it( 'should return the correct color object', ( { expect } ) => {
		expect( transformColors( mockPalette ) ).toStrictEqual( [
			{
				name: 'Test',
				slug: 'test',
				color: '#001122',
			},
			{
				name: 'Deep color',
				slug: 'deep-color',
				color: '#334455',
			},
		] );
	} );
} );

describe( 'directions', () => {
	it( 'should return the correct direction words', ( { expect } ) => {
		expect( capitalizeDirections( 'test-to-l' ) ).toBe( 'Test To Left' );
		expect( capitalizeDirections( 'test-to-r' ) ).toBe( 'Test To Right' );
		expect( capitalizeDirections( 'test-to-t' ) ).toBe( 'Test To Top' );
		expect( capitalizeDirections( 'test-to-b' ) ).toBe( 'Test To Bottom' );
		expect( capitalizeDirections( 'test-to-tl' ) ).toBe( 'Test To TopLeft' );
		expect( capitalizeDirections( 'test-to-tr' ) ).toBe( 'Test To TopRight' );
		expect( capitalizeDirections( 'test-to-bl' ) ).toBe( 'Test To BottomLeft' );
		expect( capitalizeDirections( 'test-to-br' ) ).toBe( 'Test To BottomRight' );
	} );
} );

describe( 'gradient', () => {
	it( 'should correctly identify gradients', ( { expect } ) => {
		expect( isGradient( '#012345' ) ).toBe( false );
		expect( isGradient( 'linear-gradient( black, white )' ) ).toBe( true );
		expect( isGradient( 'radial-gradient( red, blue, green )' ) ).toBe( true );
		expect( isGradient( 'conic-gradient( yellow, gray )' ) ).toBe( true );
		expect( isGradient( 'unknown-gradient( this, color )' ) ).toBe( false );
	} );
} );

describe( 'gradients', () => {
	it( 'should return the correct gradient object', ( { expect } ) => {
		expect( transformGradients( mockGradients ) ).toStrictEqual( [
			{
				name: 'Linear',
				slug: 'linear',
				gradient: 'linear-gradient( black, white )',
			},
			{
				name: 'Radial',
				slug: 'radial',
				gradient: 'radial-gradient( red, blue, green )',
			},
			{
				name: 'Conic',
				slug: 'conic',
				gradient: 'conic-gradient( yellow, gray )',
			},
		] );
	} );
} );
