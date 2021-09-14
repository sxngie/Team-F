import cn from 'classnames';
import React from 'react';

import Logo from './Logo';
import styles from './PageLoading.module.sass';

interface Props {
	className?: string;
}

const PageLoading: React.FC<Props> = ({ className }) => {
	return (
		<main className={cn(styles.container, className)}>
			<Logo />
		</main>
	);
};

export default PageLoading;
