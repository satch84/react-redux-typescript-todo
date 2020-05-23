import { render } from '@testing-library/react';
import React from "react";
import { Header, HeaderProps } from "./Header";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: (lng: string) => lng},
    }),
}));

const mockedSelectLanguage = jest.fn();

const props: HeaderProps = {
    language: 'en',
    selectLanguage: mockedSelectLanguage,
};

describe('<Header />', () => {
    test('should render the Header component', () => {
        const wrapper = render(<Header {...props} />);
        expect(wrapper).toBeDefined();
    });
});
