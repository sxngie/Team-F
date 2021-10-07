import cn from 'classnames';
import { getTimeStamp } from 'utils/functions/formatter';
import { Chat as C } from 'utils/types/Chat';

import Avatars from '../Avatars';
import Icon from '../Icon';
import styles from './Chat.module.sass';

interface Props {
	chat: C;
	notificationMax?: number;
	setChat: React.Dispatch<
		React.SetStateAction<{
			visible: boolean;
			chatId?: string;
		}>
	>;
	activeId?: string;
}

const Chat: React.FC<Props> = ({
	chat,
	setChat,
	activeId,
	notificationMax = 999,
}) => {
	const { avatars, lastMessage, name, timeStamp, notifications, id } = chat;

	return (
		<button
			className={cn(styles.item, {
				[styles.active]: activeId === id,
			})}
			onClick={() => setChat({ chatId: id, visible: true })}
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
