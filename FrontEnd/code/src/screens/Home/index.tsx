import SongProgress from 'common/components/SongProgress';
import React, { useEffect, useState } from 'react';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	const [position, setPosition] = useState(0);
	const duration = 183450;

	return (
		<main className={styles.main}>
			<SongProgress
				duration={duration}
				position={position}
				setPosition={setPosition}
				showRemaining
			/>
		</main>
	);
};

export default Home;
