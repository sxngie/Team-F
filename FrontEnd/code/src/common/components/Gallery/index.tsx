import React, { useEffect, useRef, useState } from 'react';
import { animated, to as interpolate, useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import styles from './Gallery.module.sass';
import { from, getAngle, getSide, getTranslation, inView, swipe, to, X } from './util';

interface Props<T> {
	list?: T[];
	velocityTrigger?: number;
	angleTrigger?: number;
	sides?: number;
}

const refH = (ref: React.RefObject<HTMLLIElement>) =>
	(ref.current?.clientHeight ?? 1) + 20;

const refW = (ref: React.RefObject<HTMLLIElement>) =>
	ref.current?.clientWidth ?? 1;

/**
 * For now it is hard to split the array to smaller bite size.
 * Dont go past 7 items in the demo.
 */
const Gallery = <T extends any>({
	list = [],
	sides = 6,
	velocityTrigger = 0.2,
	angleTrigger = 0.5,
}: Props<T>) => {
	const [selected, setSelected] = useState(0);

	const galleryRef = useRef<HTMLUListElement>(null);
	const ref = useRef<HTMLLIElement>(null);

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
	const elements = inView(list, selected, sides);
	const index = elements.findIndex(({ index }) => index === selected);

	const [props, api] = useSprings(elements.length, (i) => ({
		...to(i, index, 180, 140),
		from: from(i),
	}));

	const bind = useDrag(({ down, velocity, initial: [xInitial], xy: [x] }) => {
		const gx =
			(galleryRef.current?.getBoundingClientRect().left ?? 0) +
			(galleryRef.current?.clientWidth ?? 0) / 2;

		const dir = x - gx < 0 ? -1 : 1;
		const move = down ? Math.abs(x - xInitial) * dir : 0;

		const { h, w } = dimensions;

		const angle = getAngle(Math.abs(move) >= h ? dir * h : move, h);

		const vMax = velocity > velocityTrigger;
		const aMax = Math.abs(angle) >= angleTrigger;

		const trigger = aMax || vMax;

		if (!down && trigger)
			setSelected((n) => swipe(n, -dir, list.length - 1));

		api.start((i) => {
			if (i !== index) {
				return {
					x: X(i, index, h, w, sides).x,
					rot: X(i, index, h, w).rot,
				};
			}

			const x = getTranslation(
				h,
				w,
				aMax ? dir * angleTrigger : angle
			).left;

			const rot = aMax ? dir * angleTrigger : angle;

			return {
				x:
					i === 0 && x > 0
						? 0
						: i === elements.length - 1 && x < 0
						? 0
						: x,
				rot:
					i === 0 && rot > 0
						? 0
						: i === elements.length - 1 && rot < 0
						? 0
						: rot,
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
				>
					{elements[i].item as any}
				</animated.li>
			))}
		</ul>
	);
};

/**
 * Work around gor rendering children arrays with ease.
 *
 */
const Container: React.FC = ({ children }) => {
	const list = React.Children.toArray(children);
	return <Gallery list={list} />;
};

export default Container;
