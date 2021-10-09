import { ModalState } from 'common/components/Header';
import React, { useState } from 'react';

import Forgot from './Forgot';
import Login from './Login';
import Secure from './Secure';
import SignUp from './SignUp';
import { Credentials, Mode } from './util';

interface Props {
	type: Mode;
	setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

const Auth: React.FC<Props> = ({ type, setModal }) => {
	const [mode, setMode] = useState(type);
	const [info, setInfo] = useState<Credentials>({
		confirmPhone: false,
		email: "UserEmail@gmail.com",
		phone: "+17871234567",
	});
	const props = {
		setType: setMode,
		setInfo,
		info,
		setModal,
	};

	switch (mode) {
		case Mode.login:
			return <Login {...props} />;

		case Mode.signUp:
			return <SignUp {...props} />;

		case Mode.forgot:
			return <Forgot {...props} />;

		case Mode.secure:
			return <Secure {...props} />;

		default:
			return null;
	}
};

export default Auth;
