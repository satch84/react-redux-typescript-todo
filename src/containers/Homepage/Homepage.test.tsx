import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '../../redux/store';
import { theme } from '../../styledComponents/theme';
import { Homepage, HomepageProps } from "./Homepage";

const mockedTaskCreate = jest.fn();
const mockedTaskDelete = jest.fn();
const mockedTaskUpdate = jest.fn();
const mockedTaskClear = jest.fn();

let props: HomepageProps = {
    taskCreate: () => mockedTaskCreate,
    taskDelete: () => mockedTaskDelete,
    taskUpdate: () => mockedTaskUpdate,
    taskClear: () => mockedTaskClear,
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

describe('<Homepage />', () => {
    const createWrapper = () => render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Homepage {...props} />
            </ThemeProvider>
        </Provider>
    );

    test('should render the Homepage component', () => {
        const { container } = createWrapper();
        expect(container).toBeDefined();
    });
});
