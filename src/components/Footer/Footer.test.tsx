import { render } from "@testing-library/react";
import React from "react";
import { Footer } from "./Footer";

describe('<Footer />', () => {
    test('should render the Footer component', () => {
        const wrapper = render(<Footer />);
        expect(wrapper).toBeDefined();
    });
});
