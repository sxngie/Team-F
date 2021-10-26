import React from 'react';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	return <main className={styles.main}></main>;
};

export default Home;
