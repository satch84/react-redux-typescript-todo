import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { createBrowserHistory as createHistory } from 'history';
import React, { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { routeCredits, routeHome } from './const/routes';
import { Credits, Homepage } from './containers';
import { getI18n } from './i18n';
import { init } from './redux/actions';
import { configureStore } from './redux/store';
import { GlobalStyle } from './styledComponents/global';
import { theme } from './styledComponents/theme';
import { saveState } from './tools';

export const history = createHistory();

const { store } = configureStore();

const TodoApp = () => {
  /** TODO: add select for en / fr languages
   * and select it from the store
   */
  const i18n = useMemo(() => getI18n('en'), ['en']);

  React.useEffect(() => {
    store.dispatch(init());
    store.subscribe(() => {
      saveState({
        tasks: store.getState().tasks
      });
    });
  }, []);

  return(
    <>
      <GlobalStyle />
      <I18nextProvider i18n={getI18n()}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router history={history}>
              <Route exact={true} path={routeHome} component={Homepage} />
              <Route path={routeCredits} component={Credits} />
            </Router>
          </ThemeProvider>
        </Provider>
      </I18nextProvider>
    </>
  );
};

export { TodoApp };
