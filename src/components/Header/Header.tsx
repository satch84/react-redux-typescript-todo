import { Select as MuiSelect } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { routeHome } from '../../const/routes';
import { Select } from '../Form/Select';
import { Navigation } from '../Navigation';
import { MainHeaderStyled } from './Header.style';

export const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('');

    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
        setLanguage(event.target.value as string);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    const headerLinks = {
        'accueil': [
            {
                'label': t('to_do_app'),
                'url': routeHome,
            },
        ],
    };

    const options = [
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
            <Select onChange={handleChange} value={language} options={options} />
            <Navigation links={headerLinks} />
        </MainHeaderStyled>
    );
};
