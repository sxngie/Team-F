import cn from 'classnames';
import { fakeChats, fakeFavorites } from 'mockup/fakeData';
import Messages from 'modules/Messages';
import Users from 'modules/Users';
import React, { useState } from 'react';

import styles from './MessageCenter.module.sass';

interface Props {}

const MessageCenter: React.FC<Props> = () => {
	const [chat, setChat] = useState<{ visible: boolean; chatId?: string }>({
		visible: false,
		chatId: fakeChats[0]?.id,
	});

	return (
		<main className={styles.container}>
			<Users
				users={fakeChats}
				favorites={fakeFavorites}
				className={styles.users}
				setChat={setChat}
				activeId={chat.chatId}
			/>
			<Messages setChat={setChat} chat={chat} />
			<section className={cn(styles.info)}></section>
		</main>
	);
};

export default MessageCenter;
