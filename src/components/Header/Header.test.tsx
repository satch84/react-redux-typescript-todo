import { render } from '@testing-library/react';
import React from "react";
import { Header } from "./Header";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: (lng: string) => lng},
    }),
}));

describe('<Header />', () => {
    test('should render the Header component', () => {
        const wrapper = render(<Header />);
        expect(wrapper).toBeDefined();
    });
});
