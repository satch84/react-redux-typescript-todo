import React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { MainContent } from '../../components/MainContent';
import { Header } from '../Header';

export const Credits: React.FC = () => {
    const { t } = useTranslation();
    return(
        <>
            <Header />
            <MainContent>
                {t('credits')}
            </MainContent>
            <Footer />
        </>
    ); 
};
