import React, { useState } from 'react';
import { animated, to as interpolate, useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import styles from './Gallery.module.sass';
import { angle, from, getSide, height, inView, middle, swipe, to, X } from './util';

interface Props<T> {
	list?: T[];
}

const sides = 3;
const velocityTrigger = 0.2;
const h = 210;

const Gallery = <T extends any>({ list = [] }: Props<T>) => {
	const [active, setActive] = useState(() => middle(list.length));
	const [elements, index] = inView(list, active, sides);
	const [props, api] = useSprings(elements.length, (i) => ({
		...to(i, index),
		from: from(i, index),
	}));

	const bind = useDrag(
		({ down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
			const vMax = velocity > velocityTrigger; // If you flick hard enough it should trigger the card to change.
			const dir = xDir < 0 ? -1 : 1;

			const trigger = vMax;
			const isGone = !down && trigger;
			if (isGone) setActive((n) => swipe(n, -dir, list.length - 1));

			api.start((i) => {
				const isTarget = index === i;

				if (!isTarget) {
					const rot = angle(i, index);
					const x = X(i, index); // When a card is gone it goes to the next position
					return {
						rot,
						x,
						delay: undefined,
						config: { friction: 10, tension: 100 },
					}; // We only care for the active card
				}

				const rot = angle(i, index) + (isGone ? 0 : xDelta);
				const x = isGone ? X(i, index) : xDelta; // When a card is gone it goes to the next position

				return {
					x,
					rot,
					delay: undefined,
					config: { friction: 10, tension: 100 },
				};
			});
		}
	);

	return (
		<animated.ul className={styles.gallery}>
			{props.map(({ x, y, rot }, i) => (
				<animated.li className={styles.container} key={i}>
					<animated.span
						{...bind(i)}
						className={styles.card}
						style={{
							transform: interpolate(
								[x, y, getSide(i, index), rot],
								(x, y, z, r) =>
									`rotate(${r}deg) translate3d(${x}px,${y}px,-${z}px)`
							),
							height: interpolate(
								[h],
								(h) => `${height(i, index, h, 30)}px`
							),
						}}
					>
						{/*@ts-ignore*/}
						{elements[i].item}
					</animated.span>
				</animated.li>
			))}
		</animated.ul>
	);
};

export default Gallery;
