import { ReactComponent as LiveShare } from 'assets/svg/Live-Share.svg';
import Icon from 'common/components/Icon';
import React from 'react';

import styles from './About.module.sass';

interface Props {}

const About: React.FC<Props> = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>What's great about us?</h1>
			<ul className={styles.wrapper}>
				<li className={styles.item}>
					<Icon name="spotify" className={styles.spotify} />
					<div className={styles.text}>
						<p className={styles.heading}>
							Quality Music Streaming
						</p>
						<p className={styles.note}>Over 70 million tracks</p>
					</div>
				</li>
				<li className={styles.item}>
					<LiveShare className={styles.live} />
					<div className={styles.text}>
						<p className={styles.heading}>Live Share</p>
						<p className={styles.note}>
							Share music with friends in real time
						</p>
					</div>
				</li>
				<li className={styles.item}>
					<img
						className={styles.community}
						alt="Community"
						src="https://unsplash.com/photos/UZe35tk5UoA/download?force=true&w=640"
					/>
					<div className={styles.text}>
						<p className={styles.heading}>Great Community</p>
						<p className={styles.note}>
							100,000+ happy monthly listeners!
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default About;
