import cn from 'classnames';
import React from 'react';

import { Base } from '../util';
import styles from './Messages.module.sass';

interface Props extends Base {
	className?: string;
}

const Messages: React.FC<Props> = ({ chat, setChat, className }) => {
	return (
		<ul
			className={cn(className, styles.messages, {
				[styles.show]: chat.visible,
			})}
		>
			{chat.chatId}
		</ul>
	);
};

export default Messages;
