/*
    Types used in Authentication  
*/

export interface Auth {
	token: string | null;
	avatar: string | null;
	username: string | null;
	isAuth: boolean;
}

/**
 * JWT Token
 */
export type Token = `${string}.${string}.${string}`;
