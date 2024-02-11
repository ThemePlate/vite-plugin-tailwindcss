import loadConfig from 'tailwindcss/loadConfig';
import resolveConfig from 'tailwindcss/resolveConfig';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { ThemeConfig } from 'tailwindcss/types/config';

export type Mode = 'full' | 'custom';

export type TWBase<T> = {
	[ key: string ]: T;
}

export type WPBase = {
	name: string;
	slug: string;
}

function resolveDefaultTailwindConfigPath(): string {
	const resolver = ( extension: string ) => {
		return resolve( process.cwd(), `tailwind.config.${ extension }` );
	};

	for ( const extension of [
		'cjs',
		'mjs',
		'ts',
		'cts',
		'mts',
	] ) {
		const configPath = resolver( extension );

		if ( existsSync( configPath ) ) {
			return configPath;
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

export class TailwindCssManager {
	private configValues;

	constructor( mode: Mode ) {
		const localTailwindConfig = loadConfig( tailwindConfigFile );

		if ( 'custom' === mode ) {
			this.configValues = localTailwindConfig?.theme?.extend;
		} else {
			const fullTailwindConfig = resolveConfig( localTailwindConfig );

			this.configValues = fullTailwindConfig?.theme;
		}
	}

	getValues = ( key: string ) => {
		/* @ts-ignore */
		return this.configValues?.[ key ] ?? {};
	};
}

export const getValues = ( key: string, mode: Mode ) => {
	if ( 'custom' === mode ) {
		return localTailwindConfig?.theme?.extend?.[ key ] ?? {};
	}

	return fullTailwindConfig?.theme?.[ key as keyof ThemeConfig ] ?? {};
};
