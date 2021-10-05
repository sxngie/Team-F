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
export const inView = <T>(list: T[], active: number, sides: number) => {
	let view = [];
	const length = list.length;
	const first = active - sides >= 0 ? active - sides : 0;
	const last = active + sides < length ? active + sides : length - 1;

	for (let i = first; i <= last; i++) {
		view.push({ index: i, item: list[i] });
	}

	return view;
};

export const to = (i: number, index: number, h: number, w: number) => ({
	scale: 1,
	rot: X(i, index, h, w).rot,
	x: X(i, index, h, w).x,
	y: 0,
});

export const from = (i: number) => ({
	x: 0,
	y: 0,
	rot: 0,
	scale: 1,
});

export const getSide = (i: number, mid: number) =>
	i === mid ? 0 : i > mid ? i - mid : mid - i;

/**
 * Returns the translation that needs to be taken for an object in a circular path.
 * @param h Height of the object.
 * @param w Width of the object.
 * @param angle Angle in radians of the object.
 * @returns Translations of the object
 */
export const getTranslation = (h: number, w: number, angle: number) => {
	const a1 = h * Math.sin(angle);
	const a2 = w * Math.cos(angle);
	const total = a1 + a2;

	return {
		left: a1,
		right: total,
	};
};

export const getAngle = (y: number, h: number) => Math.asin(y / h);

export const X = (i: number, mid: number, h: number, w: number, diff = 10) => {
	const n = getSide(i, mid);
	const angle = (i > mid ? 1 : -1) * getAngle(n * diff, h);
	const trans = getTranslation(h, w, angle);

	return {
		rot: angle,
		x: trans.left,
	};
};

export const swipe = (active: number, dir: number, max: number) => {
	if ((active === 0 && dir < 0) || (active === max && dir > 0)) return active;
	return active + dir;
};
