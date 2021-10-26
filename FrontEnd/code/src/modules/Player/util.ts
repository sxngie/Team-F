import { useEffect, useRef, useState } from 'react';
import animationInterval from 'utils/functions/animationFrame';

const interval = 1000;

interface Controller {
	duration: number;
	paused: boolean;
	controller: AbortController | null;
}

export const useController = (
	position: number,
	duration: number,
	paused: boolean
) => {
	const [p, setP] = useState(position);
	const state = useRef<Controller>({
		duration,
		controller: new AbortController(),
		paused,
	});

	if (p >= duration) stop();

	useEffect(() => {
		if (!paused) start();

		return () => stop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { stop, start, position: p, setPosition, setDuration };

	function stop() {
		state.current.paused = true;
		state.current.controller?.abort();
		state.current.controller = null;
	}

	function start() {
		if (!state.current.paused) return;

		state.current.paused = false;
		state.current.controller = new AbortController();

		// Create an animation callback every second:
		animationInterval(
			interval,
			state.current.controller.signal,
			onInterval
		);
	}

	function onInterval() {
		if (p >= state.current.duration) return stop();
		setP((pos) => pos + interval);
	}

	function setPosition(ms: number) {
		if (ms === p) return;
		setP(ms);
	}

	function setDuration(ms: number) {
		if (ms === state.current.duration) return;
		state.current.duration = ms;
	}
};
