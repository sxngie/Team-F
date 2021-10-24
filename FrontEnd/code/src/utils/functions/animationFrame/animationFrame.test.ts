import animationInterval from './index';

test("Animation Interval time accuracy.", async () => {
	const controller = new AbortController();

	const t0 = performance.now();

	let result: number;

	const answer = 1000;

	animationInterval(answer, controller.signal, () => {
		const t1 = performance.now();
		result = t1 - t0;

		expect(result).toEqual(answer);
	});

	// And to stop it:
	controller.abort();
});
