import { SpringValue } from 'react-spring';

/**
 * Finds the middle index of the list.
 * @param {number} length Size of the list.
 * @returns {number} The middle index of the given list.
 */
export const middle = (length: number) =>
	length % 2 === 0 ? length / 2 : (length - 1) / 2;

/**
 * Returns a subset of the list that is in view to the user.
 * @param {T[]} list List of all the items.
 * @param {number} active Currently selected index.
 * @param {number} sides Amount of items to be included from each side.
 * @returns Subset of the provided list.
 */
export const inView = <T>(
	list: T[],
	active: number,
	sides: number
): [
	{
		index: number;
		item: T;
	}[],
	number
] => {
	let view = [];

	const length = list.length;
	const first = active - sides >= 0 ? active - sides : 0;
	const last = active + sides < length ? active + sides : length - 1;

	let index = 0;
	for (let i = first; i <= last; i++) {
		if (i < active) index += 1;

		view.push({ index: i, item: list[i] });
	}

	return [view, index];
};

export const to = (i: number, mid: number) => ({
	x: X(i, mid),
	y: Y(i, mid),
	scale: 1,
	rot: angle(i, mid),
	delay: getSide(i, mid) * 100,
});

export const from = (i: number, mid: number) => ({
	x: 0,
	rot: 0,
	scale: 1,
	y: Y(i, mid),
});

export const trans = (r: SpringValue<number>) => `rotate(${r}deg)`;

export const getSide = (i: number, mid: number) =>
	i > mid ? i - mid : mid - i;

export const height = (i: number, mid: number, h: number, diff = 10) =>
	i === mid ? h : h - diff * getSide(i, mid);

export const Y = (i: number, mid: number, diff = 10) =>
	i === mid ? 0 : getSide(i, mid) * diff;

export const X = (i: number, mid: number, diff = 10) =>
	i === mid ? 0 : i > mid ? getSide(i, mid) * diff : -getSide(i, mid) * diff;

export const angle = (
	i: number,
	mid: number,
	options = { a1: 3, d: 2 }
): number => {
	if (i === mid) return 0;

	const { a1, d } = options;
	const n = getSide(i, mid);

	const f = (i: number) => a1 + d * (i - 1);
	return i > mid ? f(n) : -f(n);
};

export const swipe = (active: number, dir: number, max: number) => {
	if ((active === 0 && dir < 0) || (active === max && dir > 0)) return active;
	return active + dir;
};
