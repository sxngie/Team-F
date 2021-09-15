import React, { Suspense } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { animated, config, useTransition } from 'react-spring';
import Loading from 'screens/PageLoading';

import styles from './Transitions.module.sass';

interface Props {}

const Transitions: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const transitions = useTransition(location, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: config.default,
		keys: (loc) => loc.pathname,
	});

	return transitions((style, screen) => (
		<animated.div style={style} className={styles.container}>
			<Suspense fallback={<Loading />}>
				<Switch location={screen}>{children}</Switch>
			</Suspense>
		</animated.div>
	));
};

export default Transitions;
