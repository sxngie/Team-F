import cn from 'classnames';
import useDarkMode from 'use-dark-mode';

import styles from './Theme.module.sass';

interface Props {
	className?: string;
}

const Theme: React.FC<Props> = ({ className }) => {
	const darkMode = useDarkMode(false);

	return (
		<label className={cn(className, styles.theme)}>
			<input
				className={styles.input}
				checked={darkMode.value}
				onChange={darkMode.toggle}
				type="checkbox"
			/>
			<span className={styles.inner}>
				<span className={styles.box}></span>
			</span>
		</label>
	);
};

export default Theme;
