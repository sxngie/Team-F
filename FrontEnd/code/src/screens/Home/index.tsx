import Slider from 'common/components/Slider';
import React from 'react';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<main className={styles.main}>
			<Slider onChange={(p) => console.log(p)} />
		</main>
	);
};

export default Home;
