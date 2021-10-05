import Gallery from 'common/components/Gallery';
import React from 'react';

import styles from './Home.module.sass';

interface Props {}

const cards = [
	"https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
	"https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

const Home: React.FC<Props> = () => {
	return (
		<main className={styles.main}>
			<Gallery onClick={(item) => console.log("click")}>
				{cards.map((src, i) => (
					<img key={i} src={src} alt="test" />
				))}
			</Gallery>
		</main>
	);
};

export default Home;
