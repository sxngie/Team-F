import cn from 'classnames';
import React from 'react';

import styles from './TrackInfo.module.sass';

interface Props {
	className?: string;
	title?: string;
	author?: string;
}

const TrackInfo: React.FC<Props> = ({ title, author, className }) => {
	return title || author ? (
		<button className={cn(styles.info, className)}>
			{title && <span className={styles.title}>{title}</span>}
			{author && <span className={styles.author}>{` ${author}`}</span>}
		</button>
	) : null;
};

export default TrackInfo;
