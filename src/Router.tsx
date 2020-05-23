import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React, { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { routeCredits, routeHome } from './const/routes';
import { Credits, Homepage } from './containers';
import { history } from './helpers';
import { initI18n } from './i18n';
import { init } from './redux/actions';
import { configureStore } from './redux/store';
import { GlobalStyle } from './styledComponents/global';
import { theme } from './styledComponents/theme';
import { saveState } from './tools';

const { store } = configureStore();

export const TodoApp: React.FunctionComponent = () => {
  /** by default language is set to English */
  const i18n = useMemo(() => initI18n('en'), ['en']);

  React.useEffect(() => {
    store.dispatch(init());
    store.subscribe(() => {
      saveState({
        tasks: store.getState().tasks,
      });
    });
  }, []);

  return(
    <>
      <GlobalStyle />
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact={true} path={routeHome} component={Homepage} />
                <Route path={routeCredits} component={Credits} />
              </Switch>
            </ConnectedRouter>
          </ThemeProvider>
        </Provider>
      </I18nextProvider>
    </>
  );
};
