import cn from 'classnames';
import Theme from 'common/components/Theme';
import useOnline from 'common/hooks/useOnline';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { RouteName } from 'routes';
import { authAtom } from 'store/auth';

import Icon, { IconName } from '../../Icon';
import styles from './User.module.sass';

export interface Options {
	menu: {
		title: string;
		icon: IconName;
		path: RouteName;
	}[];
}

interface Props {
	className?: string;
	items?: Options[];
}

const User: React.FC<Props> = ({ className, items = [] }) => {
	const [auth, setAuth] = useRecoilState(authAtom);
	const [visible, setVisible] = useState(false);
	const isOnline = useOnline();

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<label
				className={cn(styles.user, className, {
					[styles.active]: visible,
				})}
			>
				<button
					className={styles.head}
					onClick={() => setVisible(!visible)}
				>
					{auth.avatar ? (
						<img src={auth.avatar} alt="Avatar" />
					) : (
						<Icon name="user" className={styles.icon} size="24" />
					)}
					<span
						className={cn(styles.network, {
							[styles.offline]: isOnline,
						})}
					></span>
				</button>
				<p>{auth.username}</p>
				<div className={styles.body}>
					<div className={styles.group}>
						{items.map((item, index) => (
							<div className={styles.menu} key={index}>
								{item.menu.map((x, index) => (
									<NavLink
										className={styles.item}
										activeClassName={styles.active}
										to={`/${x.path}`}
										onClick={() => setVisible(!visible)}
										key={index}
									>
										<div className={styles.icon}>
											<Icon name={x.icon} size="24" />
										</div>
										<div className={styles.text}>
											{x.title}
										</div>
									</NavLink>
								))}
							</div>
						))}
					</div>
					<div className={styles.btns}>
						<Theme />
						<button
							className={cn(
								"button-stroke button-small",
								styles.button
							)}
							onClick={() => setAuth({ isAuth: false })}
						>
							Log out
						</button>
					</div>
				</div>
			</label>
		</OutsideClickHandler>
	);
};

export default User;
