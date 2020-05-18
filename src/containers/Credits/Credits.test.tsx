import { render } from "@testing-library/react";
import React from "react";
import { Credits } from "./Credits";

describe('<Credits />', () => {
    test('should render the Credits page', () => {
        const wrapper = render(<Credits />);
        expect(wrapper).toBeDefined();
    });
});
