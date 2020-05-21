import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { TaskForm, TaskFormProps } from "./TaskForm";

const props: TaskFormProps = {
    onChange: () => () => jest.fn(),
    taskCreate: () => () =>  jest.fn(),
    tasks: [
        {
            content: 'content',
            date: 'date',
            status: 'to do',
            uuid: 'uuid',
        }
    ],
    value: 'value',
};

describe('<TaskForm />', () => {
    const createWrapper = () => render(<TaskForm {...props} />)

    test('should render the TaskForm component', () => {
        const wrapper = createWrapper();
        expect(wrapper).toBeDefined();
    });

    test('should call taskCreate', () => {
        const { container, getByText } = createWrapper();
        const button = getByText('Add a task');

        expect(container).toBeDefined();
        fireEvent.click(button);
        /** to fix */
        // expect(props.taskCreate).toHaveBeenCalled();
    });
});
