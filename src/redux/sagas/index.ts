import { all } from 'redux-saga/effects';
import { watchInitial } from './sagaInitial';

/**
 * Global watch
 * the saga that's regroup all the saga watcher.
 */
export function* rootSaga() {
    yield all([watchInitial()]);
}
