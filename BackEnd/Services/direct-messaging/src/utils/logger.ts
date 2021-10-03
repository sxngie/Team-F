/*
    Our goal is to always keep the application's experience to the highest
    standards. With that in mind we need to keep track of the events that
    occur in this application to have a better understanding of what needs
    improvement.

    This logger will focus on taking care of these needs.
*/

import { appendFile } from 'fs';
import { join } from 'path';

/**
 * Used to log information out to a specific file.
 */
export default class Logger {
	private path!: string;

	/**
	 * Creates the logger object.
	 * @param {string} path The path to write the logs.
	 */
	constructor(path: string) {
		this.setpath(path);
	}

	/**
	 * Runs the logger with the provided text. Includes the time that it was
	 * executed.
	 * @param {string} str Information to log.
	 */
	public async log(str: string) {
		const data = `Time: ${new Date().toISOString()}\nLog: ${str}\n\n`;

		appendFile(this.path, data, { encoding: "utf8" }, (error) => error);
	}

	/**
	 * Sets the path that will receive the logging information.
	 * @param {string} path Path to write the logs.
	 */
	public setpath(path: string) {
		if (this.isEmpty(path)) {
			throw new Error("Cannot be an empty string");
		}

		this.path = join(__dirname, path);
	}

	/**
	 *
	 * @param {string} str String to verify.
	 * @returns {boolean} If the string is empty or not.
	 */
	private isEmpty(str: string) {
		return str === "";
	}
}
