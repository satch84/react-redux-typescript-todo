import { IAction } from './InterfaceAction';

export interface InterfaceTask {
    uuid: string;
    date: string;
    content: string;
    status: string;
};

export interface InterfaceTaskType {
    taskList: InterfaceTask[];
} 

export interface ICreateTaskAction extends IAction {
    payload: {
        task: InterfaceTask
    };
}

export interface IDeleteTaskAction extends IAction {
    payload: {
        uuid: string;
    };
}

export interface IUpdateTaskAction extends IAction {
    payload: {
        uuid: string;
        status: string;
    };
}

export interface IClearTaskAction extends IAction {
    payload: null;
}
