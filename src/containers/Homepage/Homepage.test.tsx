import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '../../redux/store';
import { theme } from '../../styledComponents/theme';
import { Homepage, HomepageProps } from './Homepage';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: (lng: string) => lng },
    }),
}));

const mockedCheckTaskCreate = jest.fn();
const mockedCheckTaskDelete = jest.fn();
const mockedCheckTaskUpdate = jest.fn();
const mockedCheckTaskClear = jest.fn();
const mockedCancelModal = jest.fn();
const mockedConfirmModal = jest.fn();

const props: HomepageProps = {
    isModalOpened: true,
    checkTaskCreate: () => mockedCheckTaskCreate,
    checkTaskDelete: () => mockedCheckTaskDelete,
    checkTaskUpdate: () => mockedCheckTaskUpdate,
    checkTaskClear: () => mockedCheckTaskClear,
    cancelModal: () => mockedCancelModal,
    confirmModal: () => mockedConfirmModal,
    tasks: [
        {
            content: 'content',
            date: 'date',
            status: 'to do',
            uuid: 'uuid',
        }
    ],
    modalType: 'type',
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
