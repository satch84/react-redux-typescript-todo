import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { createBrowserHistory as createHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { routeCredits, routeHome } from './const/routes';
import { Credits, Homepage } from './containers';
import { init } from './redux/actions';
import { configureStore } from './redux/store';
import { GlobalStyle } from './styledComponents/global';
import { theme } from './styledComponents/theme';

export const history = createHistory();

const { store } = configureStore();

const TodoApp = () => {
  React.useEffect(() => {
    store.dispatch(init());
  }, []);

  return(
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Route exact={true} path={routeHome} component={Homepage} />
            <Route path={routeCredits} component={Credits} />
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export { TodoApp };
