import { render } from "@testing-library/react";
import React from "react";
import { Fab, FabProps } from "./Fab";

const props: FabProps = {
    children: 'fab text',
};

describe('<Fab />', () => {
    test('should render the Fab component', () => {
        const wrapper = render(<Fab {...props} />);
        expect(wrapper).toBeDefined();
    });
});
