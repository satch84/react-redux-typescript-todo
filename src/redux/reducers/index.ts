import { connectRouter } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';
import { combineReducers } from 'redux';
import { language } from './reducerLanguage';
import { isLoading } from './reducerLoading';
import { modal } from './reducerModal';
import { tasks } from './reducerTask';

const history = createHistory();

export const rootReducer = combineReducers({
    isLoading,
    language,
    modal,
    router: connectRouter(history),
    tasks,
});
