/*
    Global state for Authentication context.
*/

import { atom } from 'recoil';
import { Auth } from 'utils/types/auth';

export const authAtom = atom<Auth>({
	key: "authAtom",
	default: {
		isAuth: false,
		token: null,
		username: null,
		avatar: null,
	},
});
