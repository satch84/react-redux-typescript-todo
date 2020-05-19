import { all } from 'redux-saga/effects';
import { watchInitial } from './sagaInitial';
import { watchTasks } from './sagaTasks';

/**
 * Global watch
 * the saga that's regroup all the saga watcher.
 */
export function* rootSaga() {
    yield all([
        watchInitial(),
        watchTasks(),
    ]);
}
