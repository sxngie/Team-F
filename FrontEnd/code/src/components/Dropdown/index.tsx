import cn from 'classnames';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import Icon from '../Icon';
import styles from './Dropdown.module.sass';

interface Props {
	className?: string;
	value?: string;
	setValue?: (val: any) => any;
	options?: string[];
	empty?: boolean;
}

const Dropdown: React.FC<Props> = ({
	className,
	value,
	setValue = () => {},
	options = [],
	empty,
}) => {
	const [visible, setVisible] = useState(false);

	const handleClick = (value: string) => {
		setValue(value);
		setVisible(false);
	};

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<div
				className={cn(
					styles.dropdown,
					{ [styles.empty]: empty },
					className,
					{
						[styles.active]: visible,
					}
				)}
			>
				<div
					className={styles.head}
					onClick={() => setVisible(!visible)}
				>
					<div className={styles.selection}>{value}</div>
					<div className={styles.arrow}>
						<Icon name="arrow-bottom" size="10" />
					</div>
				</div>
				<div className={styles.body}>
					{options.map((x, index) => (
						<div
							className={cn(styles.option, {
								[styles.selectioned]: x === value,
							})}
							onClick={() => handleClick(x)}
							key={index}
						>
							{x}
						</div>
					))}
				</div>
			</div>
		</OutsideClickHandler>
	);
};

export default Dropdown;
