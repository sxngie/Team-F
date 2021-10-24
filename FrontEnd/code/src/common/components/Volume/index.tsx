import cn from 'classnames';
import React from 'react';

import Icon from '../Icon';
import Slider from '../Slider';
import styles from './Volume.module.sass';

interface Props {
	/**
	 * Volume in percent.
	 */
	volume?: number;
	/**
	 * Sets the volume in percent when the slider changes.
	 */
	setVolume?: (volume: number) => {};
	className?: string;
	/**
	 * Disables the use of the slider to change values.
	 */
	disabled?: boolean;
}

const Volume: React.FC<Props> = ({
	setVolume = () => {},
	volume = 0,
	className,
	disabled,
}) => {
	const v = volume < 0 ? 0 : volume > 100 ? 100 : volume;

	return (
		<div className={cn(className, styles.wrapper)}>
			<Icon className={styles.icon} name="volume-lower-fill" />
			<Slider
				className={styles.slider}
				markOnHover
				percent={v}
				onChange={setVolume}
				disabled={disabled}
			/>
			<Icon className={styles.icon} name="volume-raise-fill" />
		</div>
	);
};

export default Volume;
