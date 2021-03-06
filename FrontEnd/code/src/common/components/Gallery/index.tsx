import React, { useEffect, useRef, useState } from 'react';
import { animated, to as interpolate, useSprings } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import styles from './Gallery.module.sass';
import { from, getAngle, getSide, getTranslation, inView, swipe, to, X } from './util';

interface Props {
	velocityTrigger?: number;
	angleTrigger?: number;
	sides?: number;
	onClick?: (index: number) => void;
	onChange?: (index: number) => void;
}

// Helper functions to get the width and height of the container.
const refH = (ref: React.RefObject<HTMLLIElement>) =>
	(ref.current?.clientHeight ?? 1) + 20;

const refW = (ref: React.RefObject<HTMLLIElement>) =>
	ref.current?.clientWidth ?? 1;

/**
 * Creates a gallery of the given elements.\
 * \
 * *For now it is hard to virtualize the list of items and have the animations
 * run smoothly. Dont go past 7 items in the demo so that the animations still work.*
 */
const Gallery = ({
	sides = 10,
	velocityTrigger = 0.2,
	angleTrigger = 0.3,
	onClick = () => {},
	onChange = () => {},
	children,
}: React.PropsWithChildren<Props>) => {
	const [selected, setSelected] = useState(0);
	const list = React.Children.toArray(children);
	const galleryRef = useRef<HTMLUListElement>(null);
	const ref = useRef<HTMLLIElement>(null);

	const [dimensions, setDimensions] = useState({
		h: refH(ref),
		w: refW(ref),
	});

	useEffect(() => {
		onChange(selected);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected]);

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

	const bind = useGesture(
		{
			onDrag: ({ down, velocity, initial: [xInitial], xy: [x] }) => {
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
			},
			onClick: ({ dragging, down }) =>
				!dragging && !down ? onClick(selected) : undefined,
		},
		{ drag: { filterTaps: true } }
	);

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

export default Gallery;
