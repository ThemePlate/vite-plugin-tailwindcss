import { describe, it } from 'vitest';

import { getName, getValues } from './common';

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
	it( 'should return correct value', ( { expect } ) => {
		expect( getValues( 'colors', 'custom' ) ).toStrictEqual( {} );
		expect( getValues( 'colors', 'full' ) ).not.toBe( {} );
		expect( getValues( 'backgroundImage', 'custom' ) ).toStrictEqual( {} );
		expect( getValues( 'backgroundImage', 'full' ) ).not.toBe( {} );
		expect( getValues( 'spacing', 'custom' ) ).toStrictEqual( {} );
		expect( getValues( 'spacing', 'full' ) ).not.toBe( {} );
		expect( getValues( 'fontFamily', 'custom' ) ).toStrictEqual( {} );
		expect( getValues( 'fontFamily', 'full' ) ).not.toBe( {} );
		expect( getValues( 'fontSize', 'custom' ) ).toStrictEqual( {} );
		expect( getValues( 'fontSize', 'full' ) ).not.toBe( {} );
	} );
} );
