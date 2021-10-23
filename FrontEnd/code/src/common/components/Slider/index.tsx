import cn from 'classnames';
import React, { useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import styles from './Slider.module.sass';

// TODO: Create the slider

interface Props {
	className?: string;
	onChange?: (percent: number) => void;
	initial?: number;
}

const progress = (percent = 0) => `translateX(calc(-100% + ${percent}%))`;

const btn = (percent = 0) => `${percent}%`;

const onMove = (x: number, left: number, width: number) => {
	const dist = x - left;

	if (dist < 0) {
		return 0;
	} else if (dist >= width) {
		return 100;
	}
	return parseFloat(((dist / width) * 100).toFixed(4));
};

const Slider: React.FC<Props> = ({
	className,
	initial = 0,
	onChange = () => {},
}) => {
	const ref = useRef<HTMLLabelElement>(null);
	const start = initial > 100 ? 100 : initial < 0 ? 0 : initial;
	const p = useRef(start);
	const [style, api] = useSpring(() => ({
		from: {
			left: btn(start),
			transform: progress(start),
		},
		config: {
			clamp: true,
			duration: 50,
		},
	}));

	const bind = useGesture({
		onDrag: ({ xy: [x], down }) => {
			if (!down) return;
			const left = ref.current?.getBoundingClientRect().left;
			const width = ref.current?.clientWidth;

			if (left === undefined || width === undefined) return;

			p.current = onMove(x, left, width);

			api.start(() => ({
				left: btn(p.current),
				transform: progress(p.current),
			}));

			onChange(p.current);
		},
		onKeyDown: ({ event }) => {
			const e = event as KeyboardEvent;
			const key = e.key;
			let delta = e.repeat ? 10 : 5;

			switch (key) {
				case "Left": // IE/Edge specific value
				case "ArrowLeft":
					if (p.current === 0) return;
					const lower = p.current - delta;

					if (lower < 0) {
						p.current = 0;
						break;
					}
					p.current = lower;
					break;
				case "Right": // IE/Edge specific value
				case "ArrowRight":
					if (p.current === 100) return;
					const raise = p.current + delta;
					if (raise > 100) {
						p.current = 100;
						break;
					}
					p.current = raise;
					break;
				default:
					return; // Quit when this doesn't handle the key event.
			}

			console.log(p.current);
			api.start(() => ({
				left: btn(p.current),
				transform: progress(p.current),
			}));
		},
	});

	return (
		<label className={cn(styles.slider, className)} ref={ref} {...bind()}>
			<button className={styles.bar}>
				<animated.span
					className={styles.progress}
					style={{ transform: style.transform }}
				></animated.span>
			</button>
			<animated.span
				className={styles.btn}
				style={{ left: style.left }}
			></animated.span>
		</label>
	);
};

export default Slider;
