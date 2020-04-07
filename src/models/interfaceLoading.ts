import { IAction } from './InterfaceAction';

export interface ILoadingStartAction extends IAction {}

export interface ILoadingStopAction extends IAction {}

export type ILoadingAction = ILoadingStartAction | ILoadingStopAction;
