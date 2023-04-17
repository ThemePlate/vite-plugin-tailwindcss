import { describe, it } from 'vitest';

import type { TWColor, TWGradient } from './color';
import { transformColors, transformGradients } from './color';

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
