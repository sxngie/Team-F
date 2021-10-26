import Player from 'modules/Player';
import React, { useCallback, useEffect, useRef } from 'react';
import { useResizeDetector } from 'react-resize-detector';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	const compact = useRef(false);
	const onResize = useCallback((width?: number) => {
		if (!width) return;

		if (!compact.current && width < 700) {
			compact.current = true;
		} else if (compact && width >= 700) {
			compact.current = false;
		}
	}, []);

	const { ref } = useResizeDetector({ onResize });

	return (
		<main className={styles.main} ref={ref}>
			<Player compact={compact.current} />
		</main>
	);
};

export default Home;
