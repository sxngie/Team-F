import Icon from 'common/components/Icon';
import React from 'react';

import { BaseView, ViewType } from '../../View/util';
import styles from './Files.module.sass';

interface Props extends BaseView {
	files?: { name: string; mimeType: string; size: string }[];
}

const Files: React.FC<Props> = ({ setView, files = [] }) => {
	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<Icon name="folder" size="24" />
				<p className={styles.title}>Files</p>
				<button
					className={styles.btn}
					onClick={() =>
						setView({ isOpen: true, type: ViewType.files })
					}
				>
					See All
				</button>
			</div>
			<div className={styles.wrapper}>
				{files.length > 0 ? (
					<ul className={styles.preview}>
						{files.map(({ name, mimeType, size }, i) => (
							<label>
								<li className={styles.item} key={i}>
									<Icon name="document" size="24" />
									<p
										className={styles.text}
									>{`${name}.${mimeType}`}</p>
									<p className={styles.note}>{size}</p>
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

export default Files;
