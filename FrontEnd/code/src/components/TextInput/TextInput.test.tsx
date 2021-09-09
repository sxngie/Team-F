import { fireEvent, render } from '@testing-library/react';

import TextInput from './index';

test("component includes proper text", () => {
	const label = "Label";
	const text = "Hello world!";

	const { getByTestId } = render(<TextInput label={label} />);

	const labelNode = getByTestId("label");
	expect(labelNode.textContent).toBe(label);

	const textNode = getByTestId("text") as HTMLInputElement;
	fireEvent.change(textNode, { target: { value: text } });
	expect(textNode.value).toBe(text);
});
