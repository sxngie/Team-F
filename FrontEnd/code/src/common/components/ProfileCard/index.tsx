import cn from 'classnames';
import React, { useState } from 'react';

import Avatars from '../Avatars';
import Icon from '../Icon';
import styles from './ProfileCard.module.sass';
import useGetUser, { followShort, getMutualStr } from './util';

// Component properties
interface Props {
	username: string;
}

const ProfileCard: React.FC<Props> = ({ username }) => {
	const data = useGetUser(username);
	const [followed, setFollowed] = useState(data.isAdded);

	const [error, setError] = useState({
		avatar: false,
		banner: false,
	});

	return (
		<div className={styles.container}>
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
					<span className={styles.avatar}>
						<Icon name="user" size={32} />
					</span>
				) : (
					<img
						className={styles.avatar}
						alt="Avatar"
						onError={() => setError({ ...error, avatar: true })}
						src={data.avatar}
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
						onError={() => setError({ ...error, banner: true })}
					/>
				)}
			</div>
			<div className={styles.bottom}>
				<button className={styles.user}>
					<div className={styles.nameWrapper}>
						<p className={styles.name}>{data.name}</p>
						{data.verified && (
							<Icon name="verified" className={styles.verified} />
						)}
					</div>
					<p className={styles.username}>{`@${username}`}</p>
				</button>
				<p className={styles.description}>{data.description}</p>

				<span className={styles.follows}>
					<button className={styles.numbers}>
						<span>{followShort(data.following)}</span>
						<span className={styles.text}>Following</span>
					</button>

					<button className={styles.numbers}>
						<span>{followShort(data.followers)}</span>
						<span className={styles.text}>Followers</span>
					</button>
				</span>
				<button className={styles.mutualWrapper}>
					<Avatars
						type={data.mutuals.top.length}
						avatars={data.mutuals.top.map(({ avatar }) => avatar)}
					/>
					<p className={styles.mutuals}>
						{getMutualStr(data.mutuals)}
					</p>
				</button>
			</div>
		</div>
	);
};

export default ProfileCard;
