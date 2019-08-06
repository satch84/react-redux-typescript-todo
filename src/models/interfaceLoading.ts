import { IAction } from './InterfaceAction';

export interface ILoadingStartAction extends IAction {
    payload: null;
}

export interface ILoadingStopAction extends IAction {
    payload: null;
}

export type ILoadingAction = ILoadingStartAction | ILoadingStopAction;
