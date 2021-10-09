import { ModalState } from 'common/components/Header';

export enum Mode {
	login = "Login",
	signUp = "Sign Up",
	forgot = "Forgot",
	secure = "Secure",
}

export interface Navigate {
	setType: React.Dispatch<React.SetStateAction<Mode>>;
	setInfo: React.Dispatch<React.SetStateAction<Credentials>>;
	setModal: React.Dispatch<React.SetStateAction<ModalState>>;
	info: Credentials;
}

export interface Credentials {
	email?: string;
	password?: string;
	confirmPhone: boolean;
	phone?: string;
}
