/**
 * Creates a new array with random values form the original array.
 * @param {T[]}arr Array to slice.
 * @param {number} n Length of new array.
 * @returns {T[]} Random subset of the original array.
 */
export const sliceRandomArray = <T>(arr: T[], n: number): T[] => {
	let result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len)
		throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
		const x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
};
