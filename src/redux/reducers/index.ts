import { combineReducers } from 'redux';
import { isLoading } from './reducerLoading';
import { tasks } from './reducerTask';

export const rootReducer = combineReducers({
    tasks,
    isLoading,
});
