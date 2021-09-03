import { formatDate, formatNumber } from './index';

test("formats dates properly", () => {
	const date = new Date(1999, 4, 11);
	const answer = "5/11/1999";

	const result = formatDate(date, "en");

	expect(result).toEqual(answer);
});

test("formats numbers properly", () => {
	const number = 1_000_000_000;
	const answer = "1,000,000,000";

	const result = formatNumber(number, "en");

	expect(result).toEqual(answer);
});
