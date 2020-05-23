import { RouterState } from 'connected-react-router';
import { InterfaceTask } from './interfaceTask';

export interface IStore {
    isLoading: boolean,
    language: string,
    modal: {
        isModalOpened: boolean,
        modalType: string | undefined,
    },
    router: RouterState | undefined,
    tasks: InterfaceTask[],
};
