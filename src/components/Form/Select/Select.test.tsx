import { render } from "@testing-library/react";
import React from "react";
import { Select, SelectProps } from "./Select";

const mockedOptions = [
    {
        label: 'english',
        value: 'en',
    },
    {
        label: 'french',
        value: 'fr',
    },
];

const mockedOnChange = jest.fn();

const props: SelectProps = {
    onChange: mockedOnChange,
    options: mockedOptions,
    value: 'value',
};

describe('<Select />', () => {
    test('should render the Select component', () => {
        const wrapper = render(<Select {...props} />);
        expect(wrapper).toBeDefined();
    });
});
