import loadConfig from 'tailwindcss/loadConfig';
import resolveConfig from 'tailwindcss/resolveConfig';
import { existsSync } from 'fs';
import { join } from 'path';

export type Mode = 'full' | 'custom';

export type TWBase<T> = {
	[ key: string ]: T;
}

export type WPBase = {
	name: string;
	slug: string;
}

const TWConfigExtensions = [
	'js',
	'cjs',
	'mjs',
	'ts',
	'cts',
	'mts',
];

export function TailwindConfigFile( path: string ): string {
	for ( const extension of TWConfigExtensions ) {
		const configPath = join( path, `tailwind.config.${ extension }` );

		if ( existsSync( configPath ) ) {
			return configPath;
		}
	}

	return '';
}

export const getName = ( str: string ) => {
	return str.split( /[-_.\s]/ ).map( label => `${ label.charAt( 0 ).toUpperCase() }${ label.slice( 1 ) }` ).join( ' ' );
};

export class TailwindCssManager {
	private configValues;

	constructor( tailwindConfigFile: string, mode: Mode ) {
		const localTailwindConfig = loadConfig( tailwindConfigFile );

		if ( 'custom' === mode ) {
			this.configValues = localTailwindConfig?.theme?.extend;
		} else {
			const fullTailwindConfig = resolveConfig( localTailwindConfig );

			this.configValues = fullTailwindConfig?.theme;
		}
	}

	getValues( key: string ) {
		/* @ts-ignore */
		return this.configValues?.[ key ] ?? {};
	};
}
