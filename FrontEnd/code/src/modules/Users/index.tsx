import cn from 'classnames';
import Chat from 'common/components/Chat';
import User from 'common/components/User';
import React from 'react';
import { Chat as C, Favorite } from 'utils/types/Chat';

import styles from './Users.module.sass';

interface Props {
	users?: C[];
	favorites?: Favorite[];
	className?: string;
	setChat: React.Dispatch<
		React.SetStateAction<{
			visible: boolean;
			chatId?: string;
		}>
	>;
	activeId?: string;
}

const Users: React.FC<Props> = ({
	users = [],
	favorites = [],
	className,
	setChat,
	activeId,
}) => {
	return (
		<section className={cn(className, styles.container)}>
			{favorites.length > 0 && (
				<>
					<h3 className={styles.header}>Favorites</h3>
					<nav className={styles.favorites}>
						{favorites
							.sort((a, b) => a.name.localeCompare(b.name))
							.map((fav, i) => (
								<User
									key={i}
									chat={fav}
									setChat={setChat}
									activeId={activeId}
								/>
							))}
					</nav>
				</>
			)}
			<h3 className={styles.header}>Direct Messages</h3>
			<nav className={styles.chats}>
				{users.map((chat, i) => (
					<Chat
						chat={chat}
						key={i}
						setChat={setChat}
						activeId={activeId}
					/>
				))}
			</nav>
		</section>
	);
};

export default Users;
