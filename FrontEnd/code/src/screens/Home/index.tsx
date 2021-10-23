import Slider from 'common/components/Slider';
import React from 'react';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<main className={styles.main}>
			<Slider initial={20} />
			<Slider />
			<Slider />
			<Slider />
			<Slider />
		</main>
	);
};

export default Home;
