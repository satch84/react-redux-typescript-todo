import { InterfaceTask } from './interfaceTask';

export interface IStore {
    tasks: InterfaceTask[],
    isLoading: boolean,
};
