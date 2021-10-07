import cn from 'classnames';
import React from 'react';
import { Favorite } from 'utils/types/Chat';

import Avatars from '../Avatars';
import styles from './Person.module.sass';

interface Props {
	chat: Favorite;
	onClick: (id: string) => void;
	activeId?: string;
}

const Person: React.FC<Props> = ({ chat, onClick, activeId }) => {
	const { avatars, id, name, notifications } = chat;
	return (
		<button
			className={cn(styles.item, {
				[styles.active]: activeId === id,
			})}
			onClick={() => onClick(id)}
		>
			<span className={styles.icon}>
				<Avatars avatars={avatars} />
				{notifications && <span className={styles.notification}></span>}
			</span>
			<p className={styles.name}>{name}</p>
		</button>
	);
};

export default Person;
