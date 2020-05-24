import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer';
import { MainContent } from '../../components/MainContent';
import { Header } from '../Header';
import { ContentStyled, CreditContentStyled, LinkContainerStyle } from './Credits.style';

export const Credits: React.FC = () => {
    const { t } = useTranslation();
    return(
        <>
            <Header />
                <MainContent>
                    <CreditContentStyled>
                        <h2>{t('credits')}</h2>
                        <ContentStyled>
                            {t('credits_text')}
                        </ContentStyled>
                        <ContentStyled>
                            {t('credits_text_2')}
                        </ContentStyled>
                        <ContentStyled>
                            {t('credits_text_3')}
                        </ContentStyled>
                        <LinkContainerStyle>
                            <ArrowForwardIcon /> <a href="https://github.com/satch84" target="_blank">Github</a>
                        </LinkContainerStyle>
                    </CreditContentStyled>
                </MainContent>
            <Footer />
        </>
    ); 
};
