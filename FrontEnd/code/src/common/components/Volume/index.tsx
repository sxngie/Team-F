import cn from 'classnames';
import React, { useState } from 'react';

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
	const [iconV, setIconV] = useState(v);

	return (
		<div className={cn(className, styles.wrapper)}>
			<Icon
				className={styles.icon}
				name={
					iconV > 50
						? "volume-raise-fill"
						: iconV === 0
						? "volume-mute-fill"
						: "volume-lower-fill"
				}
			/>
			<Slider
				className={styles.slider}
				markOnHover
				percent={v}
				onChange={(v) => {
					setVolume(v);

					if (v > 50 && iconV <= 50) {
						setIconV(v);
					} else if (v === 0 && iconV !== 0) {
						setIconV(v);
					} else if (v <= 50 && iconV > 50) {
						setIconV(v);
					} else if (iconV === 0 && v > 0) {
						setIconV(v);
					}
				}}
				disabled={disabled}
			/>
		</div>
	);
};

export default Volume;
