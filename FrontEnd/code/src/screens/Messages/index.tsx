import cn from 'classnames';
import Messages from 'common/components/Messages';
import { convertToFav, getFakeChats } from 'mockup/fakeData';
import Users from 'modules/Users';
import React, { useState } from 'react';

import styles from './MessageCenter.module.sass';

interface Props {}

const list = getFakeChats(20, 10).sort((a, b) =>
	!a.timeStamp || !b.timeStamp
		? -1
		: b.timeStamp.getTime() - a.timeStamp.getTime()
);

const MessageCenter: React.FC<Props> = () => {
	const [chat, setChat] = useState<{ visible: boolean; chatId?: string }>({
		visible: false,
		chatId: list[0]?.id,
	});

	return (
		<main className={styles.container}>
			<Users
				users={list}
				favorites={convertToFav(list)}
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
