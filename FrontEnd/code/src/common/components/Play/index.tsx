import cn from 'classnames';
import React from 'react';

import Icon from '../Icon';
import styles from './Play.module.sass';

interface Props {
	className?: string;
	/**
	 * If the player is currently paused.
	 */
	isPaused?: boolean;
	/**
	 * Change the value of the pause state.
	 */
	setPaused?: (paused: boolean) => void;
	/**
	 * To `next` track.
	 */
	onNext?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	/**
	 * To `previous` track.
	 */
	onPrev?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Play: React.FC<Props> = ({
	className,
	isPaused = true,
	setPaused = () => {},
	onNext = () => {},
	onPrev = () => {},
}) => {
	return (
		<div className={cn(className, styles.wrapper)}>
			<button className={styles.btn} onClick={onPrev}>
				<Icon name="prev-track" className={styles.icon} size={24} />
			</button>
			<button
				className={styles.play}
				onClick={() => setPaused(!isPaused)}
			>
				<Icon
					name={isPaused ? "play" : "pause"}
					className={styles.playBtn}
				/>
			</button>
			<button className={styles.btn} onClick={onNext}>
				<Icon name="next-track" className={styles.icon} size={24} />
			</button>
		</div>
	);
};

export default Play;
