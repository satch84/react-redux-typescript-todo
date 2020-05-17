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
    task: InterfaceTask
}

export interface IDeleteTaskAction extends IAction {
    uuid: string;
}

export interface IUpdateTaskAction extends IAction {
    uuid: string;
    status: string;
}

export interface IClearTaskAction extends IAction {}
