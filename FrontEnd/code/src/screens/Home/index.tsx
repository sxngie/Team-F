import ProfileCard from 'common/components/ProfileCard';
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import styles from './Home.module.sass';

interface Props {}

const Home: React.FC<Props> = () => {
	const [open, setOpen] = useState(true);
	return (
		<main className={styles.main}>
			<h3>
				{open
					? "Click outside to close me"
					: "Click anywhere to open me"}
			</h3>
			<OutsideClickHandler onOutsideClick={() => setOpen((o) => !o)}>
				<ProfileCard username={"SpongeBob"} visible={open} />
			</OutsideClickHandler>
		</main>
	);
};

export default Home;
