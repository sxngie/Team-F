import cn from 'classnames';
import React, { useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';

import styles from './Slider.module.sass';

// TODO: Create the slider

interface Props {
	className?: string;
	/**
	 * Returns a function that gives the current percent value of the slider.
	 *
	 * *Only triggers when change occurs from within. If the percent value is
	 * changed using the `value` prop then it will not trigger.*
	 */
	onChange?: (percent: number) => void;
	/**
	 * Default percent to start the slider in. If the value is greater or less
	 * than the allowed boundaries it will change them to fit the corresponding
	 * extreme.
	 *
	 *Bounds: `0 <= initial <= 100`
	 */
	percent?: number;
	/**
	 * If the slider is disabled.
	 *
	 * This determines if it can change values with user events
	 */
	disabled?: boolean;
	/**
	 * If the target mark should be hidden and only shown on hover or focus
	 */
	markOnHover?: boolean;
	/**
	 * Tells you if the slider is being pressed by mouse, touch, or keyboard.
	 */
	isPressed?: (isPressed: boolean) => void;
	/**
	 * Percent to change by when key pressed.
	 */
	delta?: number;
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

/**
 * Slider to be used to get percent values. Includes touch and mouse events
 * and supports key events.
 *
 * *Only renders once! :D*
 */
const Slider: React.FC<Props> = ({
	className,
	onChange = () => {},
	percent = 0,
	disabled,
	markOnHover,
	isPressed = () => {},
	delta = 5,
}) => {
	const ref = useRef<HTMLLabelElement>(null);
	const start = percent > 100 ? 100 : percent < 0 ? 0 : percent;
	const p = useRef(start);
	const pressed = useRef(false);
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

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => isPressed(pressed.current), []);

	useEffect(() => {
		p.current = start;
		api.start(() => ({
			left: btn(p.current),
			transform: progress(p.current),
		}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [percent]);

	const bind = useGesture({
		onDrag: ({ xy: [x], down }) => {
			if (down !== pressed.current && !disabled) {
				isPressed(down);
			}

			pressed.current = down;
			if (!down || disabled) return;
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
			if (disabled) return;

			const e = event as KeyboardEvent;
			const key = e.key;

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
					if (!e.repeat) isPressed(true);
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
					if (!e.repeat) isPressed(true);
					break;
				default:
					return; // Quit when this doesn't handle the key event.
			}

			api.start(() => ({
				left: btn(p.current),
				transform: progress(p.current),
			}));
			onChange(p.current);
		},
		onKeyUp: ({ event }) => {
			if (disabled) return;

			const e = event as KeyboardEvent;
			const key = e.key;

			switch (key) {
				case "Left": // IE/Edge specific value
				case "ArrowLeft":
				case "Right": // IE/Edge specific value
				case "ArrowRight":
					isPressed(false);
					break;
				default:
					return; // Quit when this doesn't handle the key event.
			}
		},
	});

	return (
		<label
			className={cn(styles.slider, className, {
				[styles.disabled]: disabled,
			})}
			ref={ref}
			{...bind()}
		>
			<button className={styles.bar}>
				<animated.span
					className={styles.progress}
					style={{ transform: style.transform }}
				></animated.span>
			</button>
			<animated.span
				className={cn(styles.btn, { [styles.onHover]: markOnHover })}
				style={{ left: style.left }}
			></animated.span>
		</label>
	);
};

export default Slider;
