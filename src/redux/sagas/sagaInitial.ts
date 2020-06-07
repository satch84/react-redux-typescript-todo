import { put, takeLatest } from 'redux-saga/effects';
import { INITIAL__INIT } from '../../const/actions';
import { loadingStartAction, loadingStopAction } from '../actions'; 

export function* init() {
    yield put(loadingStartAction());
    // console.log('calling saga init here, need to call some async data!');
    yield put(loadingStopAction());
}

export function* watchInitial() {
    yield takeLatest(INITIAL__INIT, init);
}
