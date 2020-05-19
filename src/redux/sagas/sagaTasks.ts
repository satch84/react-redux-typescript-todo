import { all,  put, takeLatest } from 'redux-saga/effects';
import { TASK__CHECK_CREATE, TASK__CHECK_DELETE, TASK__CHECK_UPDATE } from '../../const/actions';
import { MODAL__CONFIRM_CHOICE, MODAL__EMPTY_VALUE, MODAL__TASK_EXISTS } from '../../const/modals';
import { TASK_STATUS_DONE, TASK_STATUS_IN_PROGRESS, TASK_STATUS_TODO } from '../../const/taskStatus';
import { checkExistingTask, createUuid, getDateAndHour } from '../../helpers';
import { CheckCreateTaskAction, DeleteTaskAction, UpdateTaskAction } from '../../models';
import { showModal, taskCreate, taskDelete, taskUpdate } from '../actions';

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
    const result = yield put(showModal(MODAL__CONFIRM_CHOICE));
    /** TODO: if click on cancel, do not delete task */
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

export function* watchCreateTask() {
    yield takeLatest(TASK__CHECK_CREATE, sagaCreateTask);
}

export function* watchDeleteTask() {
    yield takeLatest(TASK__CHECK_DELETE, sagaDeleteTask);
}

export function* watchUpdateTask() {
    yield takeLatest(TASK__CHECK_UPDATE, sagaUpdateTask);
}

export function* watchTasks() {
    yield all([watchCreateTask(), watchDeleteTask(), watchUpdateTask()]);
}
