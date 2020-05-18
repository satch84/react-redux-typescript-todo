import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '../../redux/store';
import { theme } from '../../styledComponents/theme';
import { TaskListsOrdered, TaskListsOrderedProps } from "./TaskListsOrdered";

let props: TaskListsOrderedProps = {
    allTasksList: [],
    doneTasksList: [],
    todoTasksList: [],
    inProgressTasksList: [],
    tasks: [
        {
            content: 'content',
            date: 'date',
            status: 'to do',
            uuid: 'uuid',
        }
    ]
};

const { store } = configureStore();

describe('<TaskListsOrdered />', () => {
    const createWrapper = () => render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <TaskListsOrdered {...props} />
            </ThemeProvider>
        </Provider>
    );

    test('should render the TaskListsOrdered component', () => {
        const wrapper = createWrapper();
        expect(wrapper).toBeDefined();
    });
});
