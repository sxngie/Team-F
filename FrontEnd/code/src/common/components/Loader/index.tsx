import cn from 'classnames';
import React from 'react';

import styles from './Loader.module.sass';

interface Props {
	className?: string;
	color?: string;
}

const Loader: React.FC<Props> = ({ className, color }) => {
	return (
		<div
			className={cn(styles.loader, className, {
				[styles.loaderWhite]: color === "white",
			})}
		></div>
	);
};

export default Loader;
