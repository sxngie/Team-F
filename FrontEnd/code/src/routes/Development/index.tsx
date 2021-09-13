import React from 'react';
import { Route } from 'react-router-dom';
import { DEV_MODE } from 'utils/constants';

import styles from './Development.module.sass';

/**
 * Container to position components in the center.
 *
 */
const Container: React.FC = ({ children }) => {
	return DEV_MODE ? (
		<Route exact path="/development">
			<div className={styles.container}>{children}</div>
		</Route>
	) : null;
};

/**
 * Used to test components in development.
 *
 */
const Development = () => {
	return <Container>{/* Component to be tested */}</Container>;
};

export default Development;
