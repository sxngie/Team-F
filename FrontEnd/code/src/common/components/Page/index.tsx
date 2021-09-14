import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import React, { useEffect } from 'react';
import { RouteComponentProps, useLocation, withRouter } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';
import styles from './Page.module.sass';

export interface PageProps extends RouteComponentProps {
	separatorHeader?: boolean;
	footerHide?: boolean;
	wide?: boolean;
	notAuthorized?: boolean;
}

const Page: React.FC<PageProps> = ({
	separatorHeader,
	children,
	footerHide,
	wide,
	notAuthorized,
}) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		clearAllBodyScrollLocks();
	}, [pathname]);

	return (
		<>
			<div className={styles.page}>
				<Header
					separatorHeader={separatorHeader}
					wide={wide}
					notAuthorized={notAuthorized}
				/>
				<div className={styles.inner}>{children}</div>
				{!footerHide && <Footer />}
			</div>
		</>
	);
};

export default withRouter(Page);
