import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '../../components/Form/Select';
import { Navigation } from '../../components/Navigation';
import { routeHome } from '../../const/routes';
import { MainHeaderStyled } from './Header.style';

export interface HeaderProps {
    language: string;
    selectLanguage: (language: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ language, selectLanguage }) => {
    const { t, i18n } = useTranslation();
    /** user language is set to English by default */
    const [userLanguage, setUserLanguage] = useState(language);

    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
        setUserLanguage(event.target.value as string);
    };

    useEffect(() => {
        /** set user language */
        i18n.changeLanguage(userLanguage);
        /** save selected language into the store */
        selectLanguage(userLanguage);
    }, [userLanguage]);

    const headerLinks = {
        'accueil': [
            {
                'label': t('to_do_app'),
                'url': routeHome,
            },
        ],
    };

    const selectOptions = [
        {
            label: 'english',
            value: 'en',
        },
        {
            label: 'french',
            value: 'fr',
        },
    ];

    return(
        <MainHeaderStyled>
            <Select onChange={handleChange} value={userLanguage} options={selectOptions} />
            <Navigation links={headerLinks} />
        </MainHeaderStyled>
    );
};
