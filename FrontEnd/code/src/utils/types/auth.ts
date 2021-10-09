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
 * JWT Token
 */
export type Token = `${string}.${string}.${string}`;
