import { render } from "@testing-library/react";
import React from "react";
import { Textfield, TextfieldProps } from "./Textfield";

const props: TextfieldProps = {
    fullWidth: false,
};

describe('<Textfield />', () => {
    test('should render the Textfield component', () => {
        const wrapper = render(<Textfield {...props} />);
        expect(wrapper).toBeDefined();
    });
});
