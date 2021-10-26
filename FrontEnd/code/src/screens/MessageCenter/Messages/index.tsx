import cn from 'classnames';
import Form from 'common/components/Form';
import Icon from 'common/components/Icon';
import { fakeChats, getFakeMessages } from 'mockup/fakeData';
import React, { useState } from 'react';

import { Base } from '../util';
import styles from './Messages.module.sass';
import Message from './type/Message';

interface Props extends Base {
	className?: string;
}

const messages = getFakeMessages(10, "me");

const Messages: React.FC<Props> = ({ chat, setChat, className }) => {
	const [message, setMessage] = useState("");
	const c = fakeChats.find((c) => c.id === chat.chatId);

	return (
		<main
			className={cn(className, styles.wrapper, {
				[styles.show]: chat.visible,
			})}
		>
			<div className={styles.controls}>
				<button
					className={cn("button-circle-stroke", styles.back)}
					onClick={() => setChat((c) => ({ ...c, visible: false }))}
				>
					<Icon name="arrow-prev" size="24" />
				</button>
				<p>{c?.name}</p>
				<button
					className={cn("button-circle-stroke", styles.info)}
					onClick={() => setChat((c) => ({ ...c, info: true }))}
				>
					<Icon name="grid" size="24" />
				</button>
			</div>
			<div className={styles.container}>
				<ul className={styles.messages}>
					{messages.map((msg, i) => (
						<Message message={msg} key={i} you={"me"} />
					))}
				</ul>
			</div>
			<Form
				className={styles.form}
				value={message}
				setValue={setMessage}
				placeholder="Send message"
				type="text"
				iconRight="arrow-next"
				iconLeft="clip"
			/>
		</main>
	);
};

export default Messages;
