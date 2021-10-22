import cn from 'classnames';
import faker from 'faker';
import React from 'react';
import { getTimeStamp } from 'utils/functions/formatter';
import { Message as M } from 'utils/types/chat';

import styles from './Message.module.sass';

interface Props {
	message: M;
	you: string;
}

const src = faker.image.avatar();

const index: React.FC<Props> = ({ message, you }) => {
	const isMe = message.owner === you;

	return (
		<li className={cn(styles.item, { [styles.you]: isMe })}>
			<span className={styles.msg}>
				{!isMe && (
					<img className={styles.avatar} alt="Avatar" src={src} />
				)}

				<span className={styles.content}>
					{!isMe && <p className={styles.name}>{message.owner}</p>}
					<p className={styles.text}>{message.message}</p>
				</span>
			</span>
			<p className={styles.time}>{getTimeStamp(message.createdAt)}</p>
		</li>
	);
};

export default index;
