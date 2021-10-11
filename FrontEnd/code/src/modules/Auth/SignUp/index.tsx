import { ReactComponent as Title } from 'assets/svg/LogoTitle.svg';
import cn from 'classnames';
import Form from 'common/components/Form';
import Icon from 'common/components/Icon';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authAtom } from 'store/auth';

import { Mode, Navigate } from '../util';
import styles from './SignUp.module.sass';

interface Props extends Navigate {}

//TODO: Add authentication functionalities
const SignUp: React.FC<Props> = ({ setType, setModal }) => {
	const setAuth = useSetRecoilState(authAtom);
	const [email, setEmail] = useState<string>("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setAuth((v) => ({ ...v, isAuth: true }));
		setModal((v) => ({ ...v, isOpen: false }));
	};

	return (
		<div className={styles.item}>
			<h3 className={cn("h3", styles.title)}>
				Sign up on <Title className={styles.logo} />
			</h3>
			<p className={styles.info}>Use Your OpenID to Sign up</p>
			<div className={styles.btns}>
				<button
					className={cn("button", styles.button)}
					onClick={handleSubmit}
				>
					<Icon name="spotify" size="16" />
					<span>Spotify</span>
				</button>
				<button
					className={cn("button-black", styles.button)}
					onClick={handleSubmit}
				>
					<Icon name="apple" size="16" />
					<span>Apple</span>
				</button>
			</div>
			<p className={styles.note}>Or continue with email</p>
			<Form
				className={styles.form}
				value={email}
				setValue={setEmail}
				onSubmit={handleSubmit}
				placeholder="Enter your email"
				type="email"
				name="email"
				iconRight="arrow-next"
			/>
			<p className={styles.foot}>
				Already have an account?{" "}
				<button
					className={styles.link}
					onClick={() => setType(Mode.login)}
				>
					Login
				</button>
			</p>
		</div>
	);
};

export default SignUp;
