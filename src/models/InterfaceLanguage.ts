import { IAction } from './InterfaceAction';

export interface SelectLanguageAction extends IAction {
    language: string;
}

export type LanguageAction = SelectLanguageAction;
