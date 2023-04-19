import resolveConfig from 'tailwindcss/resolveConfig';
import { resolve } from 'path';

export type Mode = 'full' | 'custom';

export type TWBase<T> = {
	[ key: string ]: T;
}

export type WPBase = {
	name: string;
	slug: string;
}

export const tailwindConfigFile = resolve( process.cwd(), 'tailwind.config.js' );
export const themeJsonFile = resolve( process.cwd(), 'theme.json' );

const localTailwindConfig = require( tailwindConfigFile );
const fullTailwindConfig = resolveConfig( localTailwindConfig );

export const getName = ( str: string ) => {
	return str.split( '-' ).map( label => `${ label.charAt( 0 ).toUpperCase() }${ label.slice( 1 ) }` ).join( ' ' );
};

export const getValues = ( key: string, mode: Mode ) => {
	if ( 'custom' === mode ) {
		return localTailwindConfig.theme.extend[ key ] ?? {};
	}

	return fullTailwindConfig.theme[ key ] ?? {};
};
