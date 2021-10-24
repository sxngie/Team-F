import { useEffect, useRef } from 'react';
import animationInterval from 'utils/functions/animationFrame';

/**
 * Triggers a callback function in a specified time in ms.
 * Corrects time delays.
 * Custom React Hooks version
 *
 * @param ms milliseconds to trigger callback.
 * @param callback callback function that gets triggered.
 */
export default function useAnimationFrame(
	ms: number,
	callback: (time: number) => void
) {
	const callbackRef = useRef(callback);
	const controller = useRef(new AbortController());

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		animationInterval(ms, controller.current.signal, callbackRef.current);

		// eslint-disable-next-line react-hooks/exhaustive-deps
		return () => controller.current.abort();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ms]);

	//TODO: Created start function and paused boolean.

	return {
		stop: () => {
			controller.current.abort();
		},
	};
}
