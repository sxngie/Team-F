import cn from 'classnames';
import Chat from 'common/components/Chat';
import Loader from 'common/components/Loader';
import Person from 'common/components/Person';
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
	chatsLoad?: boolean;
	favLoad?: boolean;
	activeId?: string;
}

const Users: React.FC<Props> = ({
	users = [],
	favorites = [],
	className,
	setChat,
	activeId,
	chatsLoad,
	favLoad,
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
								<Person
									key={i}
									chat={fav}
									onClick={(id) =>
										setChat({ visible: true, chatId: id })
									}
									activeId={activeId}
								/>
							))}
						{favLoad && (
							<span className={cn(styles.load, styles.vertical)}>
								<Loader className={styles.loader} />
							</span>
						)}
					</nav>
				</>
			)}
			<h3 className={styles.header}>Direct Messages</h3>
			<nav className={styles.chats}>
				{users.map((chat, i) => (
					<Chat
						chat={chat}
						key={i}
						onClick={(id) => setChat({ visible: true, chatId: id })}
						activeId={activeId}
					/>
				))}
			</nav>
			{chatsLoad && (
				<span className={styles.load}>
					<Loader className={styles.loader} />
				</span>
			)}
		</section>
	);
};

export default Users;
