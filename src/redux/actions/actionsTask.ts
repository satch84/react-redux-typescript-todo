import {
    TASK__CHECK_CREATE,
    TASK__CHECK_DELETE,
    TASK__CHECK_UPDATE,
    TASK__CLEAR,
    TASK__CREATE,
    TASK__DELETE,
    TASK__UPDATE,
} from '../../const/actions';
import {
    ClearTaskAction,
    CreateTaskAction,
    DeleteTaskAction,
    InterfaceTask,
    UpdateTaskAction,
} from '../../models'; 

export const checkTaskCreate = (taskList: InterfaceTask[], value: string) => ({
    taskList,
    value,
    type: TASK__CHECK_CREATE,
});

export const checkTaskUpdate = (uuid: string, status: string): UpdateTaskAction => ({
    uuid,
    status,
    type: TASK__CHECK_UPDATE,
});

export const checkTaskDelete = (uuid: string): DeleteTaskAction => ({
    uuid,
    type: TASK__CHECK_DELETE
});

export const taskCreate = (task: InterfaceTask): CreateTaskAction => ({
    task,
    type: TASK__CREATE,
});

export const taskUpdate = (uuid: string, status: string): UpdateTaskAction => ({
    uuid,
    status,
    type: TASK__UPDATE,
});

export const taskDelete = (uuid: string): DeleteTaskAction => ({
    uuid,
    type: TASK__DELETE,
});

export const taskClear = (): ClearTaskAction => ({
    type: TASK__CLEAR,
});
