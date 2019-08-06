import { IStore } from '../../models';

export const initialState: IStore = {
    isLoading: false,
    tasks: {
        taskList: [],
    },
};
