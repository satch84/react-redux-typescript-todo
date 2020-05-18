import { render } from "@testing-library/react";
import React from "react";
import { Navigation, NvigationProps } from "./Navigation";

const props: NvigationProps = {
    links: {
        'home': [
            {
                'label': 'ToDo App',
                'url': 'url',
            },
        ],
    },
};

describe('<Navigation />', () => {
    test('should render the Navigation component', () => {
        const wrapper = render(<Navigation {...props} />);
        expect(wrapper).toBeDefined();
    });
});
