import { formatNumber } from 'utils/functions/formatter';

import { fireEvent, render } from '@testing-library/react';

import Counter from './index';

test("component can change value", () => {
	let count = 0;

	const { getByTestId } = render(
		<Counter
			value={count}
			setValue={(v) => (count = v)}
			iconMinus="minus"
			iconPlus="plus"
		/>
	);

	const increase = getByTestId("increase");

	expect(count).toBe(0);
	fireEvent.click(increase);
	expect(count).toBe(1);
});

test("does not allow negatives", () => {
	let count = 0;

	const { getByTestId } = render(
		<Counter
			value={count}
			setValue={(v) => (count = v)}
			iconMinus="minus"
			iconPlus="plus"
		/>
	);

	const decrease = getByTestId("decrease");

	expect(count).toBe(0);
	fireEvent.click(decrease);
	expect(count).toBe(0);
});

test("allows negatives", () => {
	let count = 0;

	const { getByTestId } = render(
		<Counter
			value={count}
			setValue={(v) => (count = v)}
			allowNegatives
			iconMinus="minus"
			iconPlus="plus"
		/>
	);

	const decrease = getByTestId("decrease");

	expect(count).toBe(0);
	fireEvent.click(decrease);
	expect(count).toBe(-1);
});

test("displays proper text", () => {
	const count = 1_000_000;

	const { getByTestId } = render(
		<Counter
			allowNegatives
			iconMinus="minus"
			iconPlus="plus"
			displayValue={`$${formatNumber(count)}`}
		/>
	);

	const display = getByTestId("display");
	expect(display.textContent).toBe("$1,000,000");
});
