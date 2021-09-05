/**
 * Set up logic to run when the app starts.
 *
 * @param {boolean} dev If the app is in production mode or not.
 */
export default function appSetup(dev: boolean): void {
	if (!dev) {
		// Warn users to not mess with code they do not understand.
		console.log(
			"%cStop!",
			"color: red; font-size:64px; font-weight:900;text-shadow: 0px 0px 5px black"
		);
		console.log(
			"%cIf someone told you to copy/paste something here you have an 11/10 chance you're being scammed.",
			"color: ; font-size:18px;"
		);
	}
}
