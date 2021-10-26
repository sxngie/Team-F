import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import cn from 'classnames';
import React, { useEffect } from 'react';
import { RouteComponentProps, useLocation, withRouter } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';
import styles from './Page.module.sass';

export interface PageProps extends RouteComponentProps {
	separatorHeader?: boolean;
	footerHide?: boolean;
	headerHide?: boolean;
	wide?: boolean;
	bodyScroll?: boolean;
}

const Page: React.FC<PageProps> = ({
	separatorHeader,
	children,
	footerHide,
	headerHide,
	wide,
	bodyScroll,
}) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
		clearAllBodyScrollLocks();
	}, [pathname]);

	return (
		<>
			<div
				className={cn(styles.page, {
					[styles.bodyScroll]: bodyScroll,
				})}
			>
				{!headerHide && (
					<Header separatorHeader={separatorHeader} wide={wide} />
				)}
				<div
					className={cn(styles.inner, {
						[styles.bodyScroll]: bodyScroll,
					})}
				>
					{children}
				</div>
				{!footerHide && <Footer />}
			</div>
		</>
	);
};

export default withRouter(Page);
