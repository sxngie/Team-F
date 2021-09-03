import cn from 'classnames';
import React from 'react';

import styles from './TextArea.module.sass';

interface Props extends React.ComponentPropsWithoutRef<"textarea"> {
	className?: string;
	label?: string;
}

const TextArea: React.FC<Props> = ({ className, label, ...props }) => {
	return (
		<div className={cn(styles.field, className)}>
			{label && <div className={styles.label}>{label}</div>}
			<div className={styles.wrap}>
				<textarea className={styles.textarea} {...props} />
			</div>
		</div>
	);
};

export default TextArea;
