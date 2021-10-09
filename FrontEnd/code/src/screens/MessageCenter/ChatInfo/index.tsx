import Person from 'common/components/Person';
import faker from 'faker';
import { fakeChats } from 'mockup/fakeData';
import React, { useState } from 'react';
import { Favorite } from 'utils/types/Chat';

import { Base } from '../util';
import styles from './ChatInfo.module.sass';
import Divider from './Divider';
import Controls from './parts/Controls';
import Files from './parts/Files';
import Links from './parts/Links';
import Media from './parts/Media';
import Starred from './parts/Starred';
import View from './View';
import { Control, ViewType } from './View/util';

interface Props extends Base {
	className?: string;
}

const srcs = Array.from({ length: 4 }, () => faker.image.nature());

const ChatInfo: React.FC<Props> = ({ className, chat, setChat }) => {
	const [view, setView] = useState<Control>({
		isOpen: false,
		type: ViewType.starred,
	});

	return (
		<section className={className}>
			{!view.isOpen ? (
				<div className={styles.container}>
					<Person
						chat={
							{
								...fakeChats.find((c) => c.id === chat.chatId),
								notifications: false,
							} as Favorite
						}
					/>
					<Controls />
					<Divider />
					<Starred setView={setView} view={view} />
					<Divider />
					<Media setView={setView} view={view} srcs={srcs} />
					<Divider />
					<Files setView={setView} view={view} />
					<Divider />
					<Links setView={setView} view={view} />
				</div>
			) : (
				<View setView={setView} view={view} />
			)}
		</section>
	);
};

export default ChatInfo;
