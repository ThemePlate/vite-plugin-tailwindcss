import { describe, it } from 'vitest';

import { getName, TailwindConfigFile, TailwindCssManager } from './common';

describe( 'name', () => {
	it( 'should return correct names', ( { expect } ) => {
		expect( getName( 'camelCase' ) ).toBe( 'CamelCase' );
		expect( getName( 'PascalCase' ) ).toBe( 'PascalCase' );
		expect( getName( 'kebab-case' ) ).toBe( 'Kebab Case' );
		expect( getName( 'snake_case' ) ).toBe( 'Snake Case' );
		expect( getName( 'SCREAMING_SNAKE_CASE' ) ).toBe( 'SCREAMING SNAKE CASE' );
		expect( getName( 'Capitalized_Snake_Case' ) ).toBe( 'Capitalized Snake Case' );
		expect( getName( 'dot.case' ) ).toBe( 'Dot Case' );
		expect( getName( 'UPPERCASE' ) ).toBe( 'UPPERCASE' );
		expect( getName( 'lowercase' ) ).toBe( 'Lowercase' );
	} );
} );

describe( 'values', () => {
	const tailwindConfigFile = TailwindConfigFile( process.cwd() );
	const tailwindCssManagerCustom = new TailwindCssManager( tailwindConfigFile, 'custom' );
	const tailwindCssManagerFull = new TailwindCssManager( tailwindConfigFile, 'full' );

	it( 'should return correct value', ( { expect } ) => {
		expect( tailwindCssManagerCustom.getValues( 'colors' ) ).toStrictEqual( {} );
		expect( tailwindCssManagerFull.getValues( 'colors' ) ).not.toBe( {} );
		expect( tailwindCssManagerCustom.getValues( 'backgroundImage' ) ).toStrictEqual( {} );
		expect( tailwindCssManagerFull.getValues( 'backgroundImage' ) ).not.toBe( {} );
		expect( tailwindCssManagerCustom.getValues( 'spacing' ) ).toStrictEqual( {} );
		expect( tailwindCssManagerFull.getValues( 'spacing' ) ).not.toBe( {} );
		expect( tailwindCssManagerCustom.getValues( 'fontFamily' ) ).toStrictEqual( {} );
		expect( tailwindCssManagerFull.getValues( 'fontFamily' ) ).not.toBe( {} );
		expect( tailwindCssManagerCustom.getValues( 'fontSize' ) ).toStrictEqual( {} );
		expect( tailwindCssManagerFull.getValues( 'fontSize' ) ).not.toBe( {} );
	} );
} );
