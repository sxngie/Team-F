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

/**
 * Formats a string to follow a phone number style.
 * @param {string} phone Phone number to format
 * @returns {string | null} Formated phone number or null if it doesnt match
 * the style.
 */
export const formatPhoneNumber = (phone: string) => {
	const cleaned = phone.replace(/\D/g, "");
	const match = cleaned.match(/^(\d|)?(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		const intlCode = match[1] ? `+${match[1]} ` : "";
		return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
			""
		);
	}
	return null;
};

export const formatEmailHide = (email: string) => {
	const show =
		Math.floor(email.length * 0.2) < 1 ? 1 : Math.floor(email.length * 0.2);
	const str = email.split("@");

	return (
		str[0].slice(0, show) +
		Array.from({ length: str[0].length - show }, () => "•").join("") +
		str[1]
	);
};

//TODO: Fix issue relating to edge case for today and yesteday.
export const getTimeStamp = (date: Date) => {
	const day = 60 * 60 * 24 * 1000;
	const now = Date.now();
	const diff = now - date.getTime();

	if (diff <= day) {
		return formatTime(date);
	} else if (diff <= day * 2) {
		return "Yesterday";
	} else if (diff <= day * 7) {
		return date.toLocaleString("en-US", {
			weekday: "long",
		});
	}
	return date.toLocaleString("en-US", {
		dateStyle: "short",
	});
};

// etc... More to come as needed.
