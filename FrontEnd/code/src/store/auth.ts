/*
    Global state for Authentication context.
*/

import faker from 'faker';
import { atom } from 'recoil';
import { Auth } from 'utils/types/auth';

export const authAtom = atom<Auth>({
	key: "authAtom",
	default: {
		isAuth: false,
		avatar: faker.image.avatar(),
		username: "Username",
	},
});
