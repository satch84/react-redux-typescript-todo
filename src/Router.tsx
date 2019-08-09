import { MuiThemeProvider as ThemeProvider } from '@material-ui/core';
import { createBrowserHistory as createHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createStore } from 'redux';
import { routeCredits, routeHome } from './const/routes';
import { Credits, Homepage } from './containers';
import { rootReducer } from './redux/reducers';
import { GlobalStyle } from './styledComponents/global';
import { theme } from './styledComponents/theme';
import { loadSerializedState, saveState } from './tools';

const persistedState = loadSerializedState();
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks
  });
});

const history = createHistory();

const TodoApp = () => (
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

export { TodoApp };
