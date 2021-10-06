import { getAngle, getSide, getTranslation, inView } from './util';

test("Correct amount of items", () => {
	const list = [1, 2, 3, 4, 5, 6, 7, 8];
	const sides = 2;
	let index = 2;

	let elements = inView(list, index, sides);

	let answer = [
		{ index: 0, item: 1 },
		{ index: 1, item: 2 },
		{ index: 2, item: 3 },
		{ index: 3, item: 4 },
		{ index: 4, item: 5 },
	];

	expect(elements).toEqual(answer);

	index += 1;
	elements = inView(list, index, sides);

	answer = [
		{ index: 1, item: 2 },
		{ index: 2, item: 3 },
		{ index: 3, item: 4 },
		{ index: 4, item: 5 },
		{ index: 5, item: 6 },
	];

	expect(elements).toEqual(answer);
});

test("Correct sides are calculated", () => {
	const list = [1, 2, 3, 4, 5];
	let index = 2;
	let side = getSide(0, index);

	expect(side).toEqual(2);

	index = 2;
	side = getSide(list.length - 1, index);

	expect(side).toEqual(2);
});

test("Gets the correct angle", () => {
	const y = 1;
	const h = 2;
	const answer = Math.PI / 6;
	const angle = getAngle(y, h);

	expect(angle.toFixed(4)).toEqual(answer.toFixed(4));
});

test("Correct translation of the object", () => {
	const h = 20;
	const w = 10;
	const angle = 0.25;
	const answer = 14;
	const trans = Math.floor(getTranslation(h, w, angle).right);

	expect(trans).toEqual(answer);
});
