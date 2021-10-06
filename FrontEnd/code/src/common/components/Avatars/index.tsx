import cn from 'classnames';
import React from 'react';

import styles from './Avatars.module.sass';

const pos = (n: number) => {
	switch (n) {
		case 1:
			return styles.one;

		case 2:
			return styles.two;

		default:
			return styles.three;
	}
};

interface Props {
	icons: string[];
}

const Avatars: React.FC<Props> = ({ icons }) => {
	const count = icons.length > 3 ? 3 : icons.length;
	const list = icons.slice(0, 3);
	const imgClass = pos(count);

	return (
		<span className={imgClass}>
			{list.map((src, i) => (
				<img
					src={src}
					alt="User Avatar"
					key={i}
					className={styles.image}
				/>
			))}
		</span>
	);
};

export default Avatars;
