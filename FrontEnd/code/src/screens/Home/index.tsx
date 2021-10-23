import Slider from 'common/components/Slider';
import React from 'react';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<main className={styles.main}>
			<Slider initial={20} />
			<Slider initial={30} />
			<Slider initial={40} />
			<Slider initial={50} />
			<Slider initial={80} />
		</main>
	);
};

export default Home;
