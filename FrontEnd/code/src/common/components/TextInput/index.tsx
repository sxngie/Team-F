import cn from 'classnames';
import React, { useState } from 'react';

import Icon from '../Icon';
import styles from './TextInput.module.sass';

interface Props extends React.ComponentPropsWithoutRef<"input"> {
	className?: string;
	label?: string;
	empty?: boolean;
	view?: boolean;
}

const TextInput: React.FC<Props> = ({
	className,
	label,
	empty,
	view,
	...props
}) => {
	const [passwordView, setPasswordView] = useState(false);
	return (
		<div
			className={cn(
				styles.field,
				{ [styles.empty]: empty },
				{ [styles.view]: view },
				className
			)}
		>
			{label && (
				<div className={styles.label} data-testid="label">
					{label}
				</div>
			)}
			<div className={styles.wrap}>
				<input
					className={styles.input}
					{...props}
					data-testid="text"
					{...(passwordView && { type: "text" })}
				/>
				{view && (
					<button
						className={styles.toggle}
						onClick={(e) => {
							e.preventDefault();
							setPasswordView((v) => !v);
						}}
					>
						<Icon name="eye" size="24" />
					</button>
				)}
			</div>
		</div>
	);
};

export default TextInput;
