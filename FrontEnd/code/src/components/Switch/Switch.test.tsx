import { fireEvent, render } from '@testing-library/react';

import Checkbox from './index';

test("switch changes value", () => {
	let value = false;

	const component = render(
		<Checkbox value={value} onChange={(e) => (value = e.target.checked)} />
	).getByTestId("switch");

	expect(value).toEqual(false);
	fireEvent.click(component);
	expect(value).toEqual(true);
});
