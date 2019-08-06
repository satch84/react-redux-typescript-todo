import { TASK__CREATE, TASK__DELETE, TASK__CLEAR, TASK__UPDATE } from '../../const/actions';
import { ICreateTaskAction, IDeleteTaskAction, IClearTaskAction, IUpdateTaskAction, InterfaceTask } from '../../models'; 

export const taskCreate = (task: InterfaceTask): ICreateTaskAction => ({
    payload: {
        task,
    },
    type: TASK__CREATE,
});

export const taskUpdate = (uuid: string, status: string): IUpdateTaskAction => ({
    payload: {
        uuid,
        status,
    },
    type: TASK__UPDATE,
});

export const taskDelete = (uuid: string): IDeleteTaskAction => ({
    payload: {
        uuid: uuid,
    },
    type: TASK__DELETE,
});

export const taskClear = (): IClearTaskAction => ({
    payload: null,
    type: TASK__CLEAR,
});
