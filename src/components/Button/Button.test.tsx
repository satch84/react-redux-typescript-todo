import { render } from "@testing-library/react";
import React from "react";
import { Button, ButtonProps } from "./Button";

const props: ButtonProps = {
    children: 'button text',
};

describe('<Button />', () => {
    test('should render the Button component', () => {
        const wrapper = render(<Button {...props} />);
        expect(wrapper).toBeDefined();
    });
});
