import cn from 'classnames';
import React from 'react';

import Icon, { IconName } from '../Icon';
import styles from './Counter.module.sass';

interface Props {
	className?: string;
	value?: number;
	displayValue?: number | string;
	setValue?: (val: number) => any;
	iconMinus: IconName;
	iconPlus: IconName;
	allowNegatives?: boolean;
	delta?: number;
}

const Counter: React.FC<Props> = ({
	className,
	value = 0,
	displayValue = value,
	setValue = () => {},
	iconMinus,
	iconPlus,
	allowNegatives = false,
	delta = 1,
}) => {
	return (
		<div className={cn(className, styles.counter)}>
			<button
				className={cn(styles.button, {
					[styles.disabled]: value <= 0 && !allowNegatives,
				})}
				onClick={() => setValue(value - delta)}
			>
				<Icon name={iconMinus} size="24" />
			</button>
			<div className={styles.number}>{displayValue}</div>
			<button
				className={styles.button}
				onClick={() => setValue(value + delta)}
			>
				<Icon name={iconPlus} size="24" />
			</button>
		</div>
	);
};

export default Counter;