import { IAction } from './InterfaceAction';

export interface InterfaceTask {
    uuid: string;
    date: string;
    content: string;
    status: string;
};

export interface CreateTaskAction extends IAction {
    task: InterfaceTask;
}

export interface DeleteTaskAction extends IAction {
    uuid: string;
}

export interface UpdateTaskAction extends IAction {
    uuid: string;
    status: string;
}

export interface CheckCreateTaskAction extends IAction {
    taskList: InterfaceTask[];
    value: string;
}

export type TaskActions =
    CreateTaskAction
    | DeleteTaskAction
    | UpdateTaskAction
    | CheckCreateTaskAction;
