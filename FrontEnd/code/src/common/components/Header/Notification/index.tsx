import cn from 'classnames';
import faker from 'faker';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

import Icon from '../../Icon';
import styles from './Notification.module.sass';

const items = [
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "1 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
	{
		title: "Kohaku Tora",
		content: "just sent you a message",
		date: "30 minute ago",
		avatar: faker.image.avatar(),
		url: "/messages",
	},
];

interface Props {
	className?: string;
}

const Notification: React.FC<Props> = ({ className }) => {
	const [visible, setVisible] = useState(false);

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<div
				className={cn(styles.notification, className, {
					[styles.active]: visible,
				})}
			>
				<button
					className={cn(styles.head, styles.active)}
					onClick={() => setVisible(!visible)}
				>
					<Icon name="notification" size="24" />
				</button>
				<div className={styles.body}>
					<div className={styles.title}>Notification</div>
					<div className={styles.list}>
						{items.map((x, index) => (
							<Link
								className={styles.item}
								to={x.url}
								onClick={() => setVisible(!visible)}
								key={index}
							>
								<div className={styles.avatar}>
									<img src={x.avatar} alt="Avatar" />
								</div>
								<div className={styles.details}>
									<div className={styles.subtitle}>
										{x.title}
									</div>
									<div className={styles.content}>
										{x.content}
									</div>
									<div className={styles.date}>{x.date}</div>
								</div>
								<div className={styles.status}></div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</OutsideClickHandler>
	);
};

export default Notification;
