import { join } from 'path';

import Logger from './index';

test("Sets correct file path", () => {
	const file = "./log.txt";
	const answer = join(__dirname, file);
	const logger = new Logger(file);

	//@ts-ignore: Visible for testing
	expect(logger.path).toBe(answer);
});

test("Logger does not allow empty string to be set", () => {
	const logger = new Logger("path");

	expect(() => new Logger("")).toThrow();
	expect(() => logger.setpath("")).toThrow();
});

//TODO: Test that files are correctly written.
