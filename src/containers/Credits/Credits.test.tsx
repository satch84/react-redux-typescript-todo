import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '../../redux/store';
import { theme } from '../../styledComponents/theme';
import { Credits } from './Credits';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: (lng: string) => lng },
    }),
}));


const { store } = configureStore();

describe('<Credits />', () => {
    const createWrapper = () => render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Credits />
            </ThemeProvider>
        </Provider>
    );

    test('should render the Credits component', () => {
        const { container } = createWrapper();
        expect(container).toBeDefined();
    });
});