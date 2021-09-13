import React from 'react';

import styles from './Page404.module.sass';

interface Props {}
/**
 * Temporary 404 page. Needs to be updated to look up to standard.
 *
 */
const Page404: React.FC<Props> = () => {
	return (
		<main className={styles.container}>
			<section className={styles.content}>
				<h1 className={styles.warning}>404</h1>
				<p className={styles.message}>Page could not be found</p>
			</section>
		</main>
	);
};

export default Page404;
