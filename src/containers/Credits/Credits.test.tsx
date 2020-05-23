import { render } from "@testing-library/react";
import React from "react";
import { Credits } from "./Credits";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: (lng: string) => lng },
    }),
}));

describe('<Credits />', () => {
    test('should render the Credits page', () => {
        const wrapper = render(<Credits />);
        expect(wrapper).toBeDefined();
    });
});
