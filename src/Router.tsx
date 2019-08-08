import { createBrowserHistory as createHistory } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { createStore } from 'redux';
import { routeCredits, routeHome } from './const/routes';
import { Credits, Homepage } from './containers';
import { rootReducer } from './redux/reducers';
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
  <Provider store={store}>
    <Router history={history}>
      <Route exact={true} path={routeHome} component={Homepage} />
      <Route path={routeCredits} component={Credits} />
    </Router>
  </Provider>
);

export { TodoApp };
