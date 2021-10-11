import cn from 'classnames';
import { getTimeStamp } from 'utils/functions/formatter';
import { Chat as C } from 'utils/types/chat';

import Avatars from '../Avatars';
import Icon from '../Icon';
import styles from './Chat.module.sass';

interface Props {
	chat: C;
	notificationMax?: number;
	onClick: (id: string) => void;
	activeId?: string;
}

const Chat: React.FC<Props> = ({ chat, onClick, activeId }) => {
	const { avatars, lastMessage, name, timeStamp, notifications, id } = chat;

	return (
		<button
			className={cn(styles.item, {
				[styles.active]: activeId === id,
			})}
			onClick={() => onClick(id)}
		>
			<span
				className={cn(styles.notification, {
					[styles.on]: notifications,
				})}
			></span>
			<Avatars avatars={avatars} />
			<span className={styles.text}>
				<p className={styles.name}>{name}</p>
				<p className={styles["last-name"]}>{lastMessage}</p>
			</span>
			<span className={styles.controls}>
				<p className={styles.time}>
					{timeStamp ? getTimeStamp(timeStamp) : ""}
				</p>
				<Icon name="arrow-next" className={styles.arrow} />
			</span>
		</button>
	);
};

export default Chat;
