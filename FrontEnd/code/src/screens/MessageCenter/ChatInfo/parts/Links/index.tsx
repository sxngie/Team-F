import Icon from 'common/components/Icon';
import React from 'react';

import { BaseView, ViewType } from '../../View/util';
import styles from './Links.module.sass';

interface Props extends BaseView {
	links?: string[];
}

const Links: React.FC<Props> = ({ setView, links = [] }) => {
	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<Icon name="globe" size="24" />
				<p className={styles.title}>Links</p>
				<button
					className={styles.btn}
					onClick={() =>
						setView({ isOpen: true, type: ViewType.links })
					}
				>
					See All
				</button>
			</div>
			<div className={styles.wrapper}>
				{links.length > 0 ? (
					<ul className={styles.preview}>
						{links.map((link, i) => (
							<label key={i}>
								<li className={styles.item}>
									<Icon name="link" size="24" />
									<a
										className={styles.link}
										href={link}
										rel="noopener noreferrer"
										target="_blank"
									>
										{link}
									</a>
								</li>
							</label>
						))}
					</ul>
				) : (
					<div className={styles.warning}>
						<Icon name="flag" />
						<p>No Links</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Links;
