import { fireEvent, render } from '@testing-library/react';

import Radio from './index';

test("radio changes value", () => {
	let value = false;

	const checkbox = render(
		<Radio value={value} onChange={(e) => (value = e.target.checked)} />
	).getByTestId("radio");

	expect(value).toEqual(false);
	fireEvent.click(checkbox);
	expect(value).toEqual(true);
});

test("component includes proper text", () => {
	const content = "Hello world!";

	const { getByTestId } = render(<Radio content={content} />);
	const contentNode = getByTestId("content");

	expect(contentNode).toHaveTextContent("Hello world!");
});
