import { ReactComponent as Logo } from 'assets/svg/Logo.svg';
import { ReactComponent as LogoTitle } from 'assets/svg/LogoTitle.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import routes from 'routes';
import { authAtom } from 'store/auth';

import Theme from '../Theme';
import styles from './Footer.module.sass';

// TODO: Implement the application footer.

/**
 * Application Footer
 *
 */
const Footer = () => {
	const auth = useRecoilValue(authAtom);

	return (
		<nav className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.controls}>
					<span className={styles.logoContainer}>
						<Logo className={styles.logo} />
						<LogoTitle className={styles.logoTitle} />
					</span>
				</div>
				<ul className={styles.links}>
					{routes.map(
						({ name, path, needAuth }, i) =>
							((!needAuth && !auth.isAuth) ||
								(auth.isAuth && needAuth)) && (
								<NavLink
									key={i}
									className={styles.link}
									to={`/${path}`}
									exact
									activeClassName={styles.active}
								>
									{name}
								</NavLink>
							)
					)}
				</ul>
				{!auth.isAuth && <Theme className={styles.theme} />}
			</div>
			<p className={styles.copyRight}>
				Copyright © 2021 Communikey LLC. All rights reserved
			</p>
		</nav>
	);
};

export default Footer;
