import { IAction } from './InterfaceAction';

export interface ShowModalAction extends IAction {
    modalType: string;
}

export type ModalActions = ShowModalAction;
