import cn from 'classnames';
import ChatList from 'common/components/ChatList';
import { chatList } from 'mockup/chatList';
import React from 'react';

import styles from './Messages.module.sass';

interface Props {}

const Messages: React.FC<Props> = () => {
	return (
		<main className={styles.container}>
			<section className={styles.list}>
				<ChatList list={chatList} />
			</section>
			<article className={styles.chat}></article>
			<section className={cn(styles.info, "tablet-hide")}></section>
		</main>
	);
};

export default Messages;
