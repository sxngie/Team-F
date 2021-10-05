import React, { useEffect, useRef, useState } from 'react';
import { animated, to as interpolate, useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import styles from './Gallery.module.sass';
import { from, getAngle, getSide, getTranslation, inView, middle, to, X } from './util';

interface Props<T> {
	list?: T[];
}

const sides = 3;
const velocityTrigger = 0.2;
const angleTrigger = 0.5;

const refH = (ref: React.RefObject<HTMLLIElement>) =>
	(ref.current?.clientHeight ?? 1) + 20;

const refW = (ref: React.RefObject<HTMLLIElement>) =>
	ref.current?.clientWidth ?? 1;

const Gallery = <T extends any>({ list = [] }: Props<T>) => {
	const selected = useRef(middle(list.length));
	const galleryRef = useRef<HTMLUListElement>(null);
	const ref = useRef<HTMLLIElement>(null);

	console.log("update");

	const [dimensions, setDimensions] = useState({
		h: refH(ref),
		w: refW(ref),
	});

	useEffect(() => {
		setDimensions({
			h: refH(ref),
			w: refW(ref),
		});
	}, [ref]);
	const elements = inView(list, selected.current, sides);
	const index = elements.findIndex(({ index }) => index === selected.current);

	const [props, api] = useSprings(elements.length, (i) => ({
		...to(i, index, 180, 140),
		from: from(i),
	}));

	const bind = useDrag(({ down, velocity, initial: [xInitial], xy: [x] }) => {
		const vMax = velocity > velocityTrigger;
		const gx =
			(galleryRef.current?.getBoundingClientRect().left ?? 0) +
			(galleryRef.current?.clientWidth ?? 0) / 2;

		const dir = x - gx < 0 ? -1 : 1;
		const move = down ? Math.abs(x - xInitial) * dir : 0;

		const { h, w } = dimensions;

		const angle = getAngle(Math.abs(move) >= h ? dir * h : move, h);

		const aMax = Math.abs(angle) > angleTrigger;

		api.start((i) => {
			if (i !== index) return;

			const x = getTranslation(
				h,
				w,
				aMax ? dir * angleTrigger : angle
			).left;

			const rot = aMax ? dir * angleTrigger : angle;

			return {
				x,
				rot,
				config: {
					friction: 20,
					clamp: true,
				},
			};
		});
	});

	return (
		<ul className={styles.gallery} ref={galleryRef} {...bind()}>
			{props.map(({ x, y, rot }, i) => (
				<animated.li
					ref={ref}
					key={i}
					className={styles.card}
					style={{
						transform: interpolate(
							[x, y, rot, getSide(i, index)],
							(x, y, r, z) =>
								`translate3d(${x}px,${y}px,-${z}px) rotate(${r}rad)`
						),
					}}
				></animated.li>
			))}
		</ul>
	);
};

export default Gallery;
