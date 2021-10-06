import React from 'react';
import { formatTime } from 'utils/functions/formatter';

import Avatars from '../Avatars';
import Icon from '../Icon';
import styles from './ChatList.module.sass';

interface Chat {
	name: string;
	lastMessage?: string;
	timeStamp?: Date;
	icons: string[];
	notifications?: number;
}

interface Props {
	list?: Chat[];
}

const ChatList: React.FC<Props> = ({ list = [] }) => {
	return (
		<ul className={styles.list}>
			{list.map((chat, i) => (
				<Item chat={chat} key={i} />
			))}
		</ul>
	);
};

interface ItemProps {
	chat: Chat;
}

const Item: React.FC<ItemProps> = ({ chat }) => {
	const { icons, lastMessage, name, timeStamp, notifications } = chat;

	return (
		<li className={styles.item}>
			<Avatars icons={icons} />
			<span className={styles.text}>
				<p className={styles.name}>{name}</p>
				<p className={styles["last-name"]}>{lastMessage}</p>
			</span>
			<span className={styles.controls}>
				<p className={styles["last-name"]}>
					{timeStamp ? formatTime(timeStamp) : ""}
				</p>
				<Icon name="arrow-next" className={styles.arrow} />
			</span>
		</li>
	);
};

export default ChatList;
