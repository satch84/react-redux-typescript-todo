import { render } from "@testing-library/react";
import React from "react";
import { Header } from "./Header";

describe('<Header />', () => {
    test('should render the Header component', () => {
        const wrapper = render(<Header />);
        expect(wrapper).toBeDefined();
    });
});
