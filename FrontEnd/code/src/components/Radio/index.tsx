import cn from 'classnames';
import React from 'react';

import styles from './Radio.module.sass';

interface Props {
	className?: string;
	content?: string;
	name?: string;
	value?: any;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio: React.FC<Props> = ({
	className,
	content,
	name,
	value,
	onChange,
}) => {
	return (
		<label className={cn(styles.radio, className)}>
			<input
				className={styles.input}
				type="radio"
				name={name}
				onChange={onChange}
				checked={value}
				data-testid="radio"
			/>
			<span className={styles.inner}>
				<span className={styles.tick}></span>
				<span className={styles.text} data-testid="content">
					{content}
				</span>
			</span>
		</label>
	);
};

export default Radio;
