import { tasks } from './reducersTask';
import { isLoading } from './reducersLoading';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    tasks,
    isLoading,
});
