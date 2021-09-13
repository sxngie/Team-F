import { fireEvent, render } from '@testing-library/react';

import Checkbox from './index';

test("checkbox changes value", () => {
	let value = false;

	const checkbox = render(
		<Checkbox value={value} onChange={(e) => (value = e.target.checked)} />
	).getByTestId("checkbox");

	expect(value).toEqual(false);
	fireEvent.click(checkbox);
	expect(value).toEqual(true);
});

test("component includes proper text", () => {
	const content = "Hello";
	const note = "World";

	const { getByTestId } = render(<Checkbox content={content} note={note} />);
	const contentNode = getByTestId("content");
	const noteNode = getByTestId("note");

	expect(contentNode).toHaveTextContent("Hello");
	expect(noteNode).toHaveTextContent("World");
});
