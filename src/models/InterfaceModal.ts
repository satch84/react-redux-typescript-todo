import { IAction } from './InterfaceAction';

export interface ShowModalAction extends IAction {
    modalType: string;
}

export interface HideModalAction extends IAction {}

export type ModalActions = ShowModalAction | HideModalAction;
