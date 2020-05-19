import { LoadingAction } from './interfaceLoading';
import { ModalActions } from './interfaceModal'; 
import { TaskActions } from './InterfaceTask';

export interface IAction {
    type: string;
}

export type IActionTypes = 
    TaskActions
    | ModalActions
    | LoadingAction;

