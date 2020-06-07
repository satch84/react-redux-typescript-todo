import { IAction } from './InterfaceAction';

export type LoadingStartAction = IAction

export type LoadingStopAction = IAction

export type LoadingAction = LoadingStartAction | LoadingStopAction;
