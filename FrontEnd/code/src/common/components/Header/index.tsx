import cn from 'classnames';
import React from 'react';

import styles from './Header.module.sass';

interface Props {
	separatorHeader?: boolean;
	wide?: boolean;
	notAuthorized?: boolean;
}

// TODO: Implement the application header.

/**
 * Application Header
 *
 */
const Header: React.FC<Props> = ({ separatorHeader, wide, notAuthorized }) => {
	return (
		<nav
			className={cn(
				styles.header,
				{ [styles.headerBorder]: separatorHeader },
				{ [styles.wide]: wide }
			)}
		></nav>
	);
};

export default Header;
