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

const index: React.FC<Props> = ({ message, you }) => {
	return (
		<li
			className={cn(styles.item, { [styles.you]: message.owner === you })}
		>
			<span className={styles.msg}>
				<img
					className={styles.avatar}
					alt="Avatar"
					src={faker.image.avatar()}
				/>
				<p className={styles.text}>{message.message}</p>
			</span>
			<p className={styles.time}>{getTimeStamp(message.createdAt)}</p>
		</li>
	);
};

export default index;
