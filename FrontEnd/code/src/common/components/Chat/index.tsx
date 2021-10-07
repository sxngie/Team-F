import cn from 'classnames';
import { formatNumber, getTimeStamp } from 'utils/functions/formatter';
import { Chat } from 'utils/types/Chat';

import Avatars from '../Avatars';
import Icon from '../Icon';
import styles from './Chat.module.sass';

interface Props {
	chat: Chat;
	notificationMax?: number;
	setChat: React.Dispatch<
		React.SetStateAction<{
			visible: boolean;
			chatId?: string;
		}>
	>;
	activeId?: string;
}

const User: React.FC<Props> = ({
	chat,
	setChat,
	activeId,
	notificationMax = 999,
}) => {
	const { avatars, lastMessage, name, timeStamp, notifications, id } = chat;

	return (
		<li
			className={cn(styles.item, {
				[styles.active]: activeId === id,
			})}
			onClick={() => setChat({ chatId: id, visible: true })}
		>
			<span className={styles.info}>
				<Avatars avatars={avatars} />
				{notifications && notifications > 0 ? (
					<span className={styles.notification}>
						{notifications >= notificationMax
							? `${formatNumber(notificationMax)}+`
							: formatNumber(notifications)}
					</span>
				) : null}
			</span>
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
		</li>
	);
};

export default User;
