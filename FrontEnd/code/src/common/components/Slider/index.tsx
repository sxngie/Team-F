import cn from 'classnames';
import React, { useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import styles from './Slider.module.sass';

// TODO: Create the slider

interface Props {
	className?: string;
	onChange?: (p: number) => void;
	initial?: number;
}

const progress = (percent = 0) => `translateX(calc(-100% + ${percent}%))`;

const btn = (percent = 0) => `calc(${percent}% - 6px)`;

const Slider: React.FC<Props> = ({
	className,
	initial = 0,
	onChange = () => {},
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [style, api] = useSpring(() => ({
		to: {
			left: btn(initial),
			transform: progress(initial),
		},
		config: {
			clamp: true,
			duration: 50,
		},
	}));

	const bind = useDrag(({ xy: [x], down }) => {
		if (!down) return;
		const left = ref.current?.getBoundingClientRect().left;
		const width = ref.current?.clientWidth;

		if (left === undefined || width === undefined) return;

		const dist = x - left;
		let p = initial;

		if (dist < 0) {
			p = 0;
		} else if (dist >= width) {
			p = 100;
		} else {
			p = parseFloat(((dist / width) * 100).toFixed(4));
		}

		api.start(() => ({
			left: btn(p),
			transform: progress(p),
		}));

		onChange(p);
	}, {});

	return (
		<div className={cn(styles.slider, className)} ref={ref} {...bind()}>
			<span className={styles.bar}>
				<animated.span
					className={styles.progress}
					style={{ transform: style.transform }}
				></animated.span>
			</span>
			<animated.span
				className={styles.btn}
				style={{ left: style.left }}
			></animated.span>
		</div>
	);
};

export default Slider;
