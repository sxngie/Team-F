import Gallery from 'common/components/Gallery';
import React from 'react';

import styles from './Home.module.sass';

interface Props {}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Home: React.FC<Props> = () => {
	return (
		<main className={styles.main}>
			<Gallery list={cards} />
		</main>
	);
};

export default Home;
