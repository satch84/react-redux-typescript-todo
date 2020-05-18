import { render } from "@testing-library/react";
import React from "react";
import { MainContent, MainContentProps } from "./MainContent";

const props: MainContentProps = {
    children: 'text',
};

describe('<MainContent />', () => {
    test('should render the MainContent component', () => {
        const wrapper = render(<MainContent {...props} />);
        expect(wrapper).toBeDefined();
    });
});
