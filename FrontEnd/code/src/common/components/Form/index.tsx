import cn from 'classnames';
import React, { FormEventHandler } from 'react';

import Icon, { IconName } from '../Icon';
import styles from './Form.module.sass';

interface Props {
	className?: string;
	big?: boolean;
	onSubmit?: FormEventHandler<HTMLFormElement>;
	placeholder?: string;
	value?: string | number | readonly string[];
	setValue: (v: string) => void;
	type?: string;
	name?: string;
	icon: IconName;
}

const Form: React.FC<Props> = ({
	className,
	big,
	onSubmit,
	placeholder,
	value,
	setValue,
	type,
	name,
	icon,
}) => {
	return (
		<form
			className={cn(className, styles.form, {
				[styles.big]: big,
			})}
			action=""
			onSubmit={onSubmit}
		>
			<input
				className={styles.input}
				type={type}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				name={name}
				placeholder={placeholder}
				required
			/>
			<button className={styles.btn}>
				<Icon name={icon} size="14" />
			</button>
		</form>
	);
};

export default Form;
