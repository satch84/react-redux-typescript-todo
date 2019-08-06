import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { Credits, Homepage } from './containers';
import { routeHome, routeCredits, routeToDo } from './const/routes';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers';
import { createBrowserHistory as createHistory } from 'history';

const store = createStore(rootReducer);
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