import React, { useEffect, useState } from 'react';

import Icon from '../Icon';
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
	const [error, setError] = useState(false);
	const [style, setStyle] = useState<React.CSSProperties>();

	useEffect(() => {
		setStyle({ animation: `${styles.grow} 0.4s ease forwards` });
	}, [avatars]);

	return (
		<span className={imgClass}>
			{avatars.slice(0, 3).map((src, i) =>
				error ? (
					<span key={i} className={styles.image} style={style}>
						<Icon name="image" />
					</span>
				) : (
					<img
						src={src}
						alt="User Avatar"
						key={`${i}-${src}`}
						className={styles.image}
						style={style}
						onError={() => setError(true)}
					/>
				)
			)}
		</span>
	);
};

export default Avatars;
