import { render } from "@testing-library/react";
import React from "react";
import { TaskForm, TaskFormProps } from "./TaskForm";

const props: TaskFormProps = {
    handleChange: () => jest.fn(),
    handleTaskCreate: () => jest.fn(),
    value: 'value',
};

describe('<TaskForm />', () => {
    test('should render the TaskForm component', () => {
        const wrapper = render(<TaskForm {...props} />);
        expect(wrapper).toBeDefined();
    });
});
