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
	avatars: string[];
}

const Avatars: React.FC<Props> = ({ avatars }) => {
	const count = avatars.length > 3 ? 3 : avatars.length;
	const imgClass = pos(count);

	return (
		<span className={imgClass}>
			{avatars.slice(0, 3).map((src, i) => (
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
