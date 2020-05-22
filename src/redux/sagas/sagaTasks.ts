import { all, call, put, race, take, takeLatest } from 'redux-saga/effects';
import {
    MODAL__CANCEL,
    MODAL__CONFIRM,
    TASK__CHECK_CLEAR,
    TASK__CHECK_CREATE,
    TASK__CHECK_DELETE,
    TASK__CHECK_UPDATE,
} from '../../const/actions';
import {
    MODAL__DELETE_TASK_CONFIRM,
    MODAL__DELETE_TASKLIST_CONFIRM,
    MODAL__EMPTY_VALUE,
    MODAL__TASK_EXISTS,
} from '../../const/modals';
import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_TODO } from '../../const/taskStatus';
import { checkExistingTask, createUuid, getDateAndHour } from '../../helpers';
import { CheckCreateTaskAction, DeleteTaskAction, UpdateTaskAction } from '../../models';
import { showModal, taskClear, taskCreate, taskDelete, taskUpdate } from '../actions';

export function* sagaCreateTask({ value, taskList }: CheckCreateTaskAction) {
    if (!value) {
        return yield put(showModal(MODAL__EMPTY_VALUE));
    }

    if (!checkExistingTask(value, taskList)) {
        return yield put(showModal(MODAL__TASK_EXISTS));
    }

    const task = {
        uuid: createUuid(),
        date: getDateAndHour(),
        content: value,
        status: TASK_STATUS_TODO,
    };
    yield put(taskCreate(task));
}

export function* sagaDeleteTask({ uuid }: DeleteTaskAction) {
    const confirmation = yield call(confirmSaga, MODAL__DELETE_TASK_CONFIRM);
    if (!confirmation) {
        return;
    }
    yield put(taskDelete(uuid));
}

export function* sagaUpdateTask({ uuid, status }: UpdateTaskAction) {
    switch (status) {
        case TASK_STATUS_TODO:
            status = TASK_STATUS_IN_PROGRESS;
            break;
        case TASK_STATUS_IN_PROGRESS:
            status = TASK_STATUS_DONE;
            break;
        case TASK_STATUS_DONE:
        default:
            return;
    }
    yield put(taskUpdate(uuid, status));
}

export function* sagaClearTasklist() {
    const confirmation = yield call(confirmSaga, MODAL__DELETE_TASKLIST_CONFIRM);
    if (!confirmation) {
        return;
    }
    yield put(taskClear());
}

export function* confirmSaga(modalType: string) {
    yield put(showModal(modalType));

    const { confirm } = yield race({
        confirm: take(MODAL__CONFIRM),
        cancel: take(MODAL__CANCEL)
    });

    return !!confirm;
}

export function* watchCreateTask() {
    yield takeLatest(TASK__CHECK_CREATE, sagaCreateTask);
}

export function* watchDeleteTask() {
    yield takeLatest(TASK__CHECK_DELETE, sagaDeleteTask);
}

export function* watchUpdateTask() {
    yield takeLatest(TASK__CHECK_UPDATE, sagaUpdateTask);
}

export function* watchClearTask() {
    yield takeLatest(TASK__CHECK_CLEAR, sagaClearTasklist);
}

export function* watchTasks() {
    yield all([watchCreateTask(), watchDeleteTask(), watchUpdateTask(), watchClearTask()]);
}
