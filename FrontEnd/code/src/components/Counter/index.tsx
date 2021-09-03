import cn from 'classnames';
import React from 'react';

import Icon from '../Icon';
import styles from './Counter.module.sass';

interface Props {
	className?: string;
	value?: number;
	setValue?: (val: any) => any;
	iconMinus: string;
	iconPlus: string;
	allowNegatives?: boolean;
}

const Counter: React.FC<Props> = ({
	className,
	value = 0,
	setValue = () => {},
	iconMinus,
	iconPlus,
	allowNegatives = false,
}) => {
	return (
		<div className={cn(className, styles.counter)}>
			<button
				className={cn(styles.button, {
					[styles.disabled]: value <= 0 && !allowNegatives,
				})}
				onClick={() => setValue(value - 1)}
			>
				<Icon name={iconMinus} size="24" />
			</button>
			<div className={styles.number}>{value}</div>
			<button
				className={styles.button}
				onClick={() => setValue(value + 1)}
			>
				<Icon name={iconPlus} size="24" />
			</button>
		</div>
	);
};

export default Counter;
