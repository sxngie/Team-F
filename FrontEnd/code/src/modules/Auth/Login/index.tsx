import cn from 'classnames';
import Icon from 'common/components/Icon';
import TextInput from 'common/components/TextInput';
import React from 'react';

import { Mode, Navigate } from '../util';
import styles from './Login.module.sass';

interface Props extends Navigate {}

//TODO: Add authentication functionalities
const Login: React.FC<Props> = ({ setType }) => {
	return (
		<div className={styles.item}>
			<div className={cn("h3", styles.title)}>Sign in</div>
			<p className={styles.info}>Use Your OpenID to Sign in</p>
			<div className={styles.btns}>
				<button className={cn("button", styles.button)}>
					<Icon name="spotify" size="16" />
					<span>Spotify</span>
				</button>
				<button className={cn("button-black", styles.button)}>
					<Icon name="apple" size="16" />
					<span>Apple</span>
				</button>
			</div>
			<p className={styles.note}>Or continue with email</p>
			<form className={styles.form} onSubmit={() => null}>
				<TextInput
					className={styles.field}
					name="email"
					type="email"
					placeholder="Email"
					required
				/>
				<TextInput
					className={styles.field}
					name="password"
					type="password"
					placeholder="Password"
					required
					view
				/>
				<button className={cn("button", styles.button)}>Login</button>
			</form>
			<div className={styles.foot}>
				<button
					className={styles.password}
					onClick={() => setType(Mode.forgot)}
				>
					Forgot password?
				</button>
				<p className={styles.foot}>
					Don't have an account?{" "}
					<button
						className={styles.link}
						onClick={() => setType(Mode.signUp)}
					>
						Create new Account
					</button>
				</p>
			</div>
		</div>
	);
};

export default Login;
