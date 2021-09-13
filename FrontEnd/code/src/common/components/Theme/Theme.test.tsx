import { fireEvent, render } from '@testing-library/react';

import Theme from './index';

test("change dark mode to light", () => {
	const storageKey = "darkMode";

	localStorage.setItem(storageKey, "true");

	const { getByTestId } = render(<Theme />);

	const theme = getByTestId("checkbox") as HTMLInputElement;

	expect(theme.checked).toBe(true);
	expect(localStorage.getItem(storageKey)).toBe("true");

	fireEvent.click(theme);

	expect(theme.checked).toBe(false);
	expect(localStorage.getItem(storageKey)).toBe("false");
});
