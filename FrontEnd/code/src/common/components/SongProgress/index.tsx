import React from 'react';
import { msTimeFormat } from 'utils/functions/formatter';

import Slider from '../Slider';
import styles from './SongProgress.module.sass';

interface Props {
	position?: number;
	duration?: number;
	setPosition?: (position: number) => void;
	showRemaining?: boolean;
}

const SongProgress: React.FC<Props> = ({
	duration = 1,
	position = 0,
	setPosition = () => {},
	showRemaining,
}) => {
	const p = position > duration ? duration : position < 0 ? 0 : position;

	return (
		<div className={styles.wrapper}>
			<p className={styles.text}>{msTimeFormat(p)}</p>
			<Slider
				className={styles.slider}
				percent={(p / duration) * 100}
				onChange={(percent) => setPosition(duration * (percent / 100))}
			/>
			<p className={styles.text}>
				{msTimeFormat(showRemaining ? duration - p : duration)}
			</p>
		</div>
	);
};

export default SongProgress;
