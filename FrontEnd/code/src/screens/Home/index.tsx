import ProfileCard from 'common/components/ProfileCard';
import React from 'react';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	return (
		<main className={styles.main}>
			<ProfileCard username={"SpongeBob"} />
		</main>
	);
};

export default Home;
