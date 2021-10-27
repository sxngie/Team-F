import cn from 'classnames';
import React, { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';
import { navToUser } from 'routes/history';

import Avatars from '../Avatars';
import Icon from '../Icon';
import styles from './ProfileCard.module.sass';
import useGetUser, { followShort, getMutualStr } from './util';

// Component properties
interface Props {
	username: string;
	visible?: boolean;
}

const ProfileCard: React.FC<Props> = ({ username, visible }) => {
	const data = useGetUser(username);
	const [followed, setFollowed] = useState(data.isAdded);
	const transitions = useTransition(visible, {
		from: { opacity: 0, transform: "scale(0.8)" },
		enter: { opacity: 1, transform: "scale(1)" },
		leave: { opacity: 0, transform: "scale(0.8)" },
		config: {
			...config.gentle,
			duration: 200,
		},
	});

	const [error, setError] = useState({
		avatar: false,
		banner: false,
	});

	return transitions(
		(style, item) =>
			item && (
				<animated.div className={styles.container} style={style}>
					<div className={styles.top}>
						<button
							className={cn(styles.button, {
								[styles.followed]: followed,
							})}
							onClick={() => setFollowed((v) => !v)}
						>
							<span>{followed ? "Following" : "Follow"}</span>
						</button>
						{error.avatar ? (
							<span
								className={styles.avatar}
								onClick={() => navToUser(username)}
							>
								<Icon name="user" size={32} />
							</span>
						) : (
							<img
								className={styles.avatar}
								alt="Avatar"
								onError={() =>
									setError({ ...error, avatar: true })
								}
								src={data.avatar}
								onClick={() => navToUser(username)}
							/>
						)}
						{error.banner ? (
							<span className={styles.banner}>
								<Icon name="image" size={32} />
							</span>
						) : (
							<img
								className={styles.banner}
								src={data.banner}
								alt="Banner"
								onError={() =>
									setError({ ...error, banner: true })
								}
							/>
						)}
					</div>
					<div className={styles.bottom}>
						<button
							className={styles.user}
							onClick={() => navToUser(username)}
						>
							<div className={styles.nameWrapper}>
								<p className={styles.name}>{data.name}</p>
								{data.verified && (
									<Icon
										name="verified"
										className={styles.verified}
									/>
								)}
							</div>
							<p className={styles.username}>{`@${username}`}</p>
						</button>
						<p className={styles.description}>{data.description}</p>

						<span className={styles.follows}>
							<button
								className={styles.numbers}
								onClick={() => navToUser(username, "following")}
							>
								<span>{followShort(data.following)}</span>
								<span className={styles.text}>Following</span>
							</button>

							<button
								className={styles.numbers}
								onClick={() => navToUser(username, "followers")}
							>
								<span>{followShort(data.followers)}</span>
								<span className={styles.text}>Followers</span>
							</button>
						</span>
						<button
							className={styles.mutualWrapper}
							onClick={() => navToUser(username, "mutuals")}
						>
							<Avatars
								type={data.mutuals.top.length}
								avatars={data.mutuals.top.map(
									({ avatar }) => avatar
								)}
							/>
							<p className={styles.mutuals}>
								{getMutualStr(data.mutuals)}
							</p>
						</button>
					</div>
				</animated.div>
			)
	);
};

/**
 * Displays content in the center panel.
 */
const AnimationWrapper: React.FC<Props> = (props) => {
	return <ProfileCard {...props} />;
};

export default AnimationWrapper;
