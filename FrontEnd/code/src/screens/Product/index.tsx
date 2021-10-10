import React from 'react';

import styles from './Product.module.sass';

interface Props {}

const Product: React.FC<Props> = () => {
	return <main className={styles.container}></main>;
};

export default Product;
