import { combineReducers } from 'redux';
import { isLoading } from './reducersLoading';
import { tasks } from './reducersTask';

export const rootReducer = combineReducers({
    tasks,
    isLoading,
});
