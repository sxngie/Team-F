import cn from 'classnames';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { RouteName } from 'routes';
import { authAtom } from 'store/auth';

import Icon, { IconName } from '../../Icon';
import styles from './Dropdown.module.sass';

export interface Item {
	title: string;
	icon: IconName;
	path: RouteName;
}

interface Props {
	className?: string;
	items: Item[];
	setValue?: (v: boolean) => void;
}

const Dropdown: React.FC<Props> = ({
	className,
	items,
	setValue = () => {},
}) => {
	const [visible, setVisible] = useState(false);
	const auth = useRecoilValue(authAtom);

	const handleClick = () => {
		setVisible(false);
		setValue(false);
	};

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<div
				className={cn(className, styles.dropdown, {
					[styles.active]: visible,
				})}
			>
				<button
					className={styles.head}
					onClick={() => setVisible(!visible)}
				>
					<p className={styles.text}>Menu</p>
					<Icon className={styles.text} name="arrow-down" size="24" />
				</button>
				<div className={styles.body}>
					{items.map(
						({ path, title, icon }, index) =>
							auth.isAuth && (
								<NavLink
									className={styles.item}
									activeClassName={styles.active}
									key={index}
									to={`/${path}`}
									onClick={handleClick}
									exact
								>
									<Icon name={icon} size="24" />
									<div className={styles.text}>{title}</div>
								</NavLink>
							)
					)}
				</div>
			</div>
		</OutsideClickHandler>
	);
};

export default Dropdown;
