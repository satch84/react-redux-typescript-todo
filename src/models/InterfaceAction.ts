import {
    IClearTaskAction,
    ICreateTaskAction, 
    IDeleteTaskAction, 
    IUpdateTaskAction 
} from './interfaceTask';

export interface IAction {
    type: string;
}

export type IActionTypes = 
    ICreateTaskAction
    | IClearTaskAction
    | IDeleteTaskAction
    | IUpdateTaskAction;

