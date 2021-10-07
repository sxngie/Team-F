import cn from 'classnames';
import React from 'react';

import styles from './Messages.module.sass';

interface Props {
	className?: string;
	chat: {
		visible: boolean;
		chatId?: string;
	};
	setChat: React.Dispatch<
		React.SetStateAction<{
			visible: boolean;
			chatId?: string;
		}>
	>;
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
