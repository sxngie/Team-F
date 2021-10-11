import React from 'react';

import About from './About';
import Main from './Main';
import styles from './Product.module.sass';

interface Props {}

const Product: React.FC<Props> = () => {
	return (
		<main className={styles.container}>
			<Main />
			<About />
		</main>
	);
};

export default Product;
