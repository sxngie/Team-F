import ServerApi from 'dataSource';

/*
    General types used throughout definitions.
*/

/**
 * String based Id.
 * ##### *Used to add more context in code.*
 */
export type Id = string;

/**
 * JWT based token.
 * ##### Format `xxxxx.yyyyy.zzzzz`
 * ##### *Used to add more context in code.*
 */
export type Token = `${string}.${string}.${string}`;

export type Authorization = `Bearer ${Token}`;
