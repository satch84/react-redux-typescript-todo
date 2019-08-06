import { InterfaceTaskType } from './interfaceTask';

export interface IStore {
    tasks: InterfaceTaskType,
    isLoading: boolean,
};
