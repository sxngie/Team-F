import Icon from 'common/components/Icon';
import React from 'react';

import { BaseView, ViewType } from '../../View/util';
import styles from './Media.module.sass';

interface Props extends BaseView {
	srcs?: string[];
}

const Media: React.FC<Props> = ({ setView, srcs = [] }) => {
	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<Icon name="image" size="24" />
				<p className={styles.title}>Media</p>
				<button
					className={styles.btn}
					onClick={() =>
						setView({ isOpen: true, type: ViewType.media })
					}
				>
					See All
				</button>
			</div>
			<div className={styles.wrapper}>
				{srcs.length > 0 ? (
					<ul className={styles.preview}>
						{srcs.map((src, i) => (
							<button className={styles.item} key={i}>
								<img src={src} alt="Chat Preview" />
							</button>
						))}
					</ul>
				) : (
					<div className={styles.warning}>
						<Icon name="flag" />
						<p>No Media</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Media;
