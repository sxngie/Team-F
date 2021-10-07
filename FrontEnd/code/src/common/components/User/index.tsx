import cn from 'classnames';
import React from 'react';
import { Favorite } from 'utils/types/Chat';

import Avatars from '../Avatars';
import styles from './User.module.sass';

interface Props {
	chat: Favorite;
	setChat: React.Dispatch<
		React.SetStateAction<{
			visible: boolean;
			chatId?: string;
		}>
	>;
	activeId?: string;
}

const User: React.FC<Props> = ({ chat, setChat, activeId }) => {
	const { avatars, id, name, notifications } = chat;
	return (
		<li
			className={cn(styles.item, {
				[styles.active]: activeId === id,
			})}
			onClick={() => setChat({ chatId: id, visible: true })}
		>
			<span className={styles.icon}>
				<Avatars avatars={avatars} />
				{notifications && <span className={styles.notification}></span>}
			</span>
			<p className={styles.name}>{name}</p>
		</li>
	);
};

export default User;
