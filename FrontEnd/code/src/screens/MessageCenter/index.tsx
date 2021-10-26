import { fakeChats, fakeFavorites } from 'mockup/fakeData';
import React, { useState } from 'react';

import Info from './ChatInfo';
import styles from './MessageCenter.module.sass';
import Messages from './Messages';
import Users from './Users';

interface Props {}

const MessageCenter: React.FC<Props> = () => {
	const [chat, setChat] = useState<{
		visible: boolean;
		chatId?: string;
		info: boolean;
	}>({
		visible: false,
		chatId: fakeChats[0]?.id,
		info: false,
	});

	return (
		<main className={styles.container}>
			<Users
				users={fakeChats}
				favorites={fakeFavorites}
				className={styles.users}
				setChat={setChat}
				chat={chat}
				activeId={chat.chatId}
			/>
			<Messages setChat={setChat} chat={chat} />
			<Info setChat={setChat} chat={chat} />
		</main>
	);
};

export default MessageCenter;
