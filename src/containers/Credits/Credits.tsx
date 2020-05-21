import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContent } from '../../components/MainContent';

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
