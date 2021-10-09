import cn from 'classnames';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import { getTimeStamp } from 'utils/functions/formatter';
import { Notification as N } from 'utils/types/header';

import Icon from '../../Icon';
import styles from './Notification.module.sass';

interface Props {
	className?: string;
	items?: N[];
}

const Notification: React.FC<Props> = ({ className, items = [] }) => {
	const [visible, setVisible] = useState(false);

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<div
				className={cn(styles.notification, className, {
					[styles.active]: visible,
				})}
			>
				<button
					className={cn(styles.head, {
						[styles.active]: items.length > 0,
					})}
					onClick={() => setVisible(!visible)}
				>
					<Icon name="notification" size="24" />
				</button>
				<div className={styles.body}>
					{items.length > 0 ? (
						<>
							<h3 className={styles.title}>Notification</h3>
							<div className={styles.list}>
								{items.map((x, index) => (
									<Link
										className={styles.item}
										to={`/${x.url}`}
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
											<div className={styles.date}>
												{getTimeStamp(x.date)}
											</div>
										</div>
										<div className={styles.status}></div>
									</Link>
								))}
							</div>
						</>
					) : (
						<p className={styles.content}>
							No Notifications at this time
						</p>
					)}
				</div>
			</div>
		</OutsideClickHandler>
	);
};

export default Notification;
