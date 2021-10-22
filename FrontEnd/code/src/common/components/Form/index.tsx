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
	iconRight: IconName;
	iconLeft?: IconName;
	autoFocus?: boolean;
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
	iconRight,
	iconLeft,
	autoFocus,
}) => {
	return (
		<form
			className={cn(className, styles.form, {
				[styles.big]: big,
			})}
			action=""
			onSubmit={onSubmit}
		>
			{iconLeft && (
				<button className={styles.leftBtn}>
					<Icon name={iconLeft} size="24" />
				</button>
			)}
			<input
				autoFocus={autoFocus}
				className={styles.input}
				type={type}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				name={name}
				placeholder={placeholder}
				required
			/>
			<button className={styles.btn}>
				<Icon name={iconRight} size="14" />
			</button>
		</form>
	);
};

export default Form;
