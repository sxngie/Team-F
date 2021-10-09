import cn from 'classnames';
import Icon from 'common/components/Icon';
import React, { useState } from 'react';

import styles from './Controls.module.sass';

interface Props {}

const Controls: React.FC<Props> = () => {
	const [notif, setNotif] = useState(true);

	return (
		<div className={styles.container}>
			<button
				className={cn(styles.item, { [styles.active]: notif })}
				onClick={() => setNotif((n) => !n)}
			>
				<Icon name="notification" />
			</button>
		</div>
	);
};

export default Controls;
