/*
    Types used in Authentication  
*/

export interface Auth {
	token?: string;
	avatar?: string;
	username?: string;
	isAuth: boolean;
}

/**
 * JWT based token.
 * ##### Format `xxxxx.yyyyy.zzzzz`
 * ##### *Used to add more context in code.*
 */
export type Token = `${string}.${string}.${string}`;

/*
    General types used throughout definitions.
*/

/**
 * String based Id.
 * ##### *Used to add more context in code.*
 */
export type Id = string;
