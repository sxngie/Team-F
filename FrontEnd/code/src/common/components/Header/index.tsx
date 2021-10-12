import { ReactComponent as Logo } from 'assets/svg/Logo.svg';
import { ReactComponent as LogoTitle } from 'assets/svg/LogoTitle.svg';
import cn from 'classnames';
import { fakeNotifications } from 'mockup/fakeData';
import Auth from 'modules/Auth';
import { Mode } from 'modules/Auth/util';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authAtom } from 'store/auth';

import Modal from '../Modal';
import Dropdown, { Item } from './Dropdown';
import styles from './Header.module.sass';
import Notification from './Notification';
import User, { Options } from './User';

interface Props {
	separatorHeader?: boolean;
	wide?: boolean;
}

export interface ModalState {
	isOpen: boolean;
	type: Mode;
}

const items: Options[] = [
	{
		menu: [
			{ title: "Account", icon: "user", path: "profile" },
			{ title: "Settings", icon: "gear", path: "settings" },
		],
	},
	{ menu: [] },
];

const routes: Item[] = [
	{ title: "Discover", icon: "globe", path: "discover" },
	{ title: "Messages", icon: "email", path: "messages" },
	{ title: "Music", icon: "music", path: "music" },
	{ title: "Library", icon: "music-album", path: "library" },
];

// TODO: Implement the application header.

/**
 * Application Header
 *
 */
const Header: React.FC<Props> = ({ separatorHeader, wide }) => {
	const [visibleNav, setVisibleNav] = useState(false); // used in mobile mode
	const { isAuth } = useRecoilValue(authAtom);

	const [modal, setModal] = useState<ModalState>({
		isOpen: false,
		type: Mode.login,
	});
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
					<Link className={styles.logo} to={isAuth ? "/home" : "/"}>
						<Logo className={styles.pic} />
						<LogoTitle className={styles.picTitle} />
					</Link>
					<div
						className={cn(styles.wrapper, {
							[styles.active]: visibleNav,
						})}
					>
						{!isAuth && (
							<>
								<NavLink
									className={styles.link}
									to={`/support`}
									exact
									activeClassName={styles.active}
								>
									Support
								</NavLink>
							</>
						)}
						{isAuth && (
							<Dropdown
								className={styles.drowdown}
								items={routes}
								setValue={setVisibleNav}
							/>
						)}
					</div>
					{!isAuth ? (
						<div className={styles.auth}>
							<button
								className={cn("button-stroke button-small")}
								onClick={() =>
									setModal({
										isOpen: true,
										type: Mode.login,
									})
								}
							>
								Login
							</button>
							<button
								className={cn("button-small")}
								onClick={() =>
									setModal({
										isOpen: true,
										type: Mode.signUp,
									})
								}
							>
								Sign Up
							</button>
						</div>
					) : (
						<div className={styles.controls}>
							<Notification
								className={styles.notification}
								items={fakeNotifications}
							/>
							<User className={styles.user} items={items} />
						</div>
					)}
					<button
						className={cn("burger", styles.burger, {
							active: visibleNav,
						})}
						onClick={() => setVisibleNav(!visibleNav)}
					></button>
				</div>
			</nav>
			<Modal
				visible={modal.isOpen}
				onClose={() => setModal((a) => ({ ...a, isOpen: false }))}
			>
				<Auth type={modal.type} setModal={setModal} />
			</Modal>
		</>
	);
};

export default Header;
