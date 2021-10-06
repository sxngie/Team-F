/*
    This module contains helper functions that format data.

    Read more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
*/

/**
 * Formats a number.
 *
 * @param {number} n Number to be formatted.
 * @param {string | string[]} locales Local to format by. (default local)
 * @param {Intl.NumberFormatOptions} options Formatter optional settings.
 * @returns {string} Formatted version of the number.
 */
export const formatNumber = (
	n: number | bigint,
	locales?: string | string[],
	options?: Intl.NumberFormatOptions
) => new Intl.NumberFormat(locales, options).format(n);

/**
 * Formats a date.
 *
 * @param {Date | number} d date to format.
 * @param {string | string[]} locales Local to format by. (default local)
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string} Formatted version of the date.
 */
export const formatDate = (
	d: Date | number,
	locales?: string | string[],
	options?: Intl.DateTimeFormatOptions
) => new Intl.DateTimeFormat(locales, options).format(d);

/**
 * Formats a date to only give the time
 *
 * @param {Date} date Date to fomat
 * @returns {string} Time format HH:MM AM/PM
 */
export const formatTime = (date: Date) =>
	date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});

// etc... More to come as needed.
