import * as React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers';
import { Route, Router, Switch } from 'react-router';
import { createStore } from 'redux';
import { Credits, Homepage } from './containers';
import { loadSerializedState, saveState } from './tools';


import { routeCredits, routeHome, routeToDo } from './const/routes';

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

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path={routeHome} component={Homepage} />
        <Route path={routeCredits} component={Credits} />
      </Switch>
    </Router>
  </Provider>
);

export { Routes };