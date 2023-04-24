import loadConfig from 'tailwindcss/loadConfig';
import resolveConfig from 'tailwindcss/resolveConfig';
import { accessSync } from 'fs';
import { resolve } from 'path';

export type Mode = 'full' | 'custom';

export type TWBase<T> = {
	[ key: string ]: T;
}

export type WPBase = {
	name: string;
	slug: string;
}

function resolveDefaultTailwindConfigPath() {
	const resolver = ( extension: string ) => {
		return resolve( process.cwd(), `tailwind.config.${ extension }` );
	}

	for ( const extension of [
		'js',
		'cjs',
		'mjs',
		'ts',
		'cts',
		'mts',
	] ) {
		try {
			const configPath = resolver( extension );

			accessSync( configPath );

			return configPath;
		} catch ( error ) {
		}
	}

	return resolver( 'js' );
}

export const tailwindConfigFile = resolveDefaultTailwindConfigPath();
export const themeJsonFile = resolve( process.cwd(), 'theme.json' );

const localTailwindConfig = loadConfig( tailwindConfigFile );
const fullTailwindConfig = resolveConfig( localTailwindConfig );

export const getName = ( str: string ) => {
	return str.split( /[-_.\s]/ ).map( label => `${ label.charAt( 0 ).toUpperCase() }${ label.slice( 1 ) }` ).join( ' ' );
};

export const getValues = ( key: string, mode: Mode ) => {
	if ( 'custom' === mode ) {
		return localTailwindConfig?.theme?.extend?.[ key ] ?? {};
	}

	return fullTailwindConfig?.theme?.[ key ] ?? {};
};
