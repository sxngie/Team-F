import React from 'react';

import styles from './Divider.module.sass';

interface Props {}

const Divider: React.FC<Props> = () => {
	return <div className={styles.divider}></div>;
};

export default Divider;
