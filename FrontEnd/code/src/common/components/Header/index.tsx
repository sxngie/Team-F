import { ReactComponent as Logo } from 'assets/svg/Logo.svg';
import { ReactComponent as LogoTitle } from 'assets/svg/LogoTitle.svg';
import cn from 'classnames';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from 'store/auth';

import Modal from '../Modal';
import styles from './Header.module.sass';

interface Props {
	separatorHeader?: boolean;
	wide?: boolean;
	authorized?: boolean;
}

interface Auth {
	isOpen: boolean;
	type: "sign in" | "sign up";
}

// TODO: Implement the application header.

/**
 * Application Header
 *
 */
const Header: React.FC<Props> = ({ separatorHeader, wide, authorized }) => {
	const authenticated = useRecoilValue(authAtom);
	const [visibleNav, setVisibleNav] = useState(false); // used in mobile mode
	const [auth, setAuth] = useState<Auth>({ isOpen: false, type: "sign in" });
	return (
		<>
			<nav
				className={cn(
					styles.header,
					{ [styles.headerBorder]: separatorHeader },
					{ [styles.wide]: wide }
				)}
			>
				<div className={cn("container", styles.container)}>
					<Link
						className={styles.logo}
						to={authenticated ? "/home" : "/"}
					>
						<Logo className={styles.pic} />
						<LogoTitle className={styles.picTitle} />
					</Link>
					<div
						className={cn(styles.wrapper, {
							[styles.active]: visibleNav,
						})}
					>
						{!authorized && (
							<>
								<NavLink
									className={styles.link}
									to={`/about`}
									exact
									activeClassName={styles.active}
								>
									Support
								</NavLink>
							</>
						)}
					</div>
					{
						!authorized ? (
							<div className={styles.auth}>
								<button
									className={cn("button-stroke button-small")}
									onClick={() =>
										setAuth({
											isOpen: true,
											type: "sign in",
										})
									}
								>
									Login
								</button>
								<button
									className={cn("button-small")}
									onClick={() =>
										setAuth({
											isOpen: true,
											type: "sign up",
										})
									}
								>
									Sign Up
								</button>
							</div>
						) : null /* User component here */
					}
					<button
						className={cn("burger", {
							active: visibleNav,
						})}
						onClick={() => setVisibleNav(!visibleNav)}
					></button>
				</div>
			</nav>
			<Modal
				visible={auth.isOpen}
				onClose={() => setAuth((a) => ({ ...a, isOpen: false }))}
			>
				{/* Login panel here */}
			</Modal>
		</>
	);
};

export default Header;
