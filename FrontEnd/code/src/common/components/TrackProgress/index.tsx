import cn from 'classnames';
import React, { useRef } from 'react';
import { msTimeFormat } from 'utils/functions/formatter';

import Slider from '../Slider';
import styles from './TrackProgress.module.sass';

interface Props {
	className?: string;
	/**
	 * The current position of the track in ms.
	 *
	 * *If the position is larger than the duration then it will be equal to the
	 * duration.*
	 */
	position?: number;
	/**
	 * The duration of the track in ms.
	 */
	duration?: number;
	/**
	 * Sets the position of the track when the slider is changed.
	 */
	setPosition?: (position: number) => void;
	/**
	 * Shows what remains of the track instead of the total duration.
	 */
	showRemaining?: boolean;
	/**
	 * Disables the use of the slider to change the position.
	 */
	disabled?: boolean;
	/**
	 * Tells you if the slider is being pressed by mouse or touch.
	 */
	isPressed?: (pressed: boolean) => void;
}

const TrackProgress: React.FC<Props> = ({
	duration = 1,
	position = 0,
	setPosition = () => {},
	showRemaining,
	className,
	disabled,
	isPressed = () => {},
}) => {
	const p = position > duration ? duration : position < 0 ? 0 : position;
	const pressed = useRef(false);

	return (
		<div className={cn(className, styles.wrapper)}>
			<p className={styles.text}>{msTimeFormat(p)}</p>
			<Slider
				className={styles.slider}
				percent={(p / duration) * 100}
				onChange={(percent) => {
					setPosition(Math.round(duration * (percent / 100)));
				}}
				disabled={disabled}
				isPressed={(p) => {
					isPressed(p);
					pressed.current = p;
				}}
				delta={(5000 / duration) * 100}
			/>
			<p className={styles.text}>
				{msTimeFormat(showRemaining ? duration - p : duration)}
			</p>
		</div>
	);
};

export default TrackProgress;