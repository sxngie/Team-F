import { ReactComponent as Background } from 'assets/svg/product-Dark.svg';
import React from 'react';

import styles from './Main.module.sass';

interface Props {}

const Main: React.FC<Props> = () => {
	return (
		<div className={styles.container}>
			<Background className={styles.background} />
			<h1 className={styles.title}>
				Go to spot for hearing music with friends
			</h1>
		</div>
	);
};

export default Main;
