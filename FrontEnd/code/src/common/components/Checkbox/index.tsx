import cn from 'classnames';
import React from 'react';

import styles from './Checkbox.module.sass';

interface Props {
	className?: string;
	content?: string;
	note?: string;
	value?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<Props> = ({
	className,
	content,
	note,
	value,
	onChange,
}) => {
	return (
		<label className={cn(styles.checkbox, className)}>
			<input
				data-testid="checkbox"
				className={styles.input}
				type="checkbox"
				onChange={onChange}
				checked={value}
			/>
			<span className={styles.inner}>
				<span className={styles.tick}></span>
				<span className={styles.text} data-testid="content">
					{content}
				</span>
				{note && (
					<span className={styles.note} data-testid="note">
						{note}
					</span>
				)}
			</span>
		</label>
	);
};

export default Checkbox;
