import { InterfaceTask } from './interfaceTask';

export interface IStore {
    isLoading: boolean,
    modal: {
        isModalOpened: boolean,
        modalType: string | undefined,
    }
    tasks: InterfaceTask[],
};
