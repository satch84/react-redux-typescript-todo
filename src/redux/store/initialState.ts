import { IStore } from '../../models';

export const initialState: IStore = {
    isLoading: false,
    modal: {
        isModalOpened: false,
        modalType: undefined,
    },
    tasks: [],
};
