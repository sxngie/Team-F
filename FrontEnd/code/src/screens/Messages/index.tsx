import cn from 'classnames';
import Messages from 'common/components/Messages';
import { convertToFav, fakeChats } from 'mockup/fakeData';
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
				favorites={convertToFav(fakeChats)}
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
