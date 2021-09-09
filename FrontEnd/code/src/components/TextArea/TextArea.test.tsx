import { fireEvent, render } from '@testing-library/react';

import TextArea from './index';

test("component includes proper text", () => {
	const label = "Label";
	const text = "Hello world!";

	const { getByTestId } = render(<TextArea label={label} />);

	const labelNode = getByTestId("label");
	expect(labelNode.textContent).toBe(label);

	const textNode = getByTestId("text-area") as HTMLInputElement;
	fireEvent.change(textNode, { target: { value: text } });
	expect(textNode.value).toBe(text);
});
