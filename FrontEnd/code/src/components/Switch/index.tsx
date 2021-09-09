import cn from 'classnames';
import React from 'react';

import styles from './Switch.module.sass';

interface Props {
	className?: string;
	value?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Switch: React.FC<Props> = ({ className, value, onChange }) => {
	return (
		<label className={cn(styles.switch, className)}>
			<input
				className={styles.input}
				type="checkbox"
				checked={value}
				onChange={onChange}
				data-testid="switch"
			/>
			<span className={styles.inner}>
				<span className={styles.box}></span>
			</span>
		</label>
	);
};

export default Switch;
