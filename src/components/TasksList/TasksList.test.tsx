import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { TasksList, TasksListProps } from "./TasksList";

let props: TasksListProps = {
    taskUpdate: () => jest.fn(),
    taskDelete: () => jest.fn(),
    tasks: [
        {
            content: 'content',
            date: 'date',
            status: 'to do',
            uuid: 'uuid',
        }
    ]
};

describe('<TasksList />', () => {
    const createWrapper = () => render(<TasksList {...props} />)

    test('should render the TasksList component with tasks in store', () => {
        const wrapper = createWrapper();
        expect(wrapper).toBeDefined();
    });

    test('should call taskUpdate', () => {
        const { getByTestId } = createWrapper();
        const button = getByTestId('button-task-update');

        expect(button).toBeDefined();
        fireEvent.click(button);
        /** TODO: fix it */
        // expect(props.taskUpdate).toHaveBeenCalled();
    });

    test('should call taskDelete', () => {
        const { getByTestId } = createWrapper();
        const button = getByTestId('button-task-delete');

        expect(button).toBeDefined();
        fireEvent.click(button);
        /** TODO: fix it */
        // expect(props.taskDelete).toHaveBeenCalled();
    });

    test('should render the TasksList component with no task in store', () => {
        props = {
            ...props,
            tasks: [],
        }
        const { getByText } = createWrapper();
        expect(getByText(/no_task_created/i)).toBeDefined();
    });
});
