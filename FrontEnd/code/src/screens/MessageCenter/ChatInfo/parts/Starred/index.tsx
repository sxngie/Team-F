import Icon from 'common/components/Icon';
import React from 'react';

import { BaseView, ViewType } from '../../View/util';
import styles from './Starred.module.sass';

interface Props extends BaseView {}

const Starred: React.FC<Props> = ({ setView }) => {
	return (
		<button
			className={styles.btn}
			onClick={() => setView({ isOpen: true, type: ViewType.starred })}
		>
			<Icon name="star-outline" className={styles.icon} />
			<p className={styles.title}>Messages</p>
			<Icon name="arrow-right" className={styles.icon} />
		</button>
	);
};

export default Starred;
