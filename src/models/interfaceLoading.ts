import { IAction } from './InterfaceAction';

export interface LoadingStartAction extends IAction {}

export interface LoadingStopAction extends IAction {}

export type LoadingAction = LoadingStartAction | LoadingStopAction;
