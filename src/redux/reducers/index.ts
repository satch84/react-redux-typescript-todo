import { combineReducers } from 'redux';
import { isLoading } from './reducerLoading';
import { modal } from './reducerModal';
import { tasks } from './reducerTask';

export const rootReducer = combineReducers({
    isLoading,
    modal,
    tasks,
});
