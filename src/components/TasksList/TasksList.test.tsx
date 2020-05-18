import { render } from "@testing-library/react";
import React from "react";
import { TasksList, TasksListProps } from "./TasksList";

let props: TasksListProps = {
    handleTaskUpdate: () => jest.fn(),
    handleTaskDelete: () => jest.fn(),
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

    test('should render the TasksList component with no task in store', () => {
        props = {
            ...props,
            tasks: [],
        }
        const { getByText } = createWrapper();
        expect(getByText(/No task has been created yet!/i)).toBeDefined();
    });
});
