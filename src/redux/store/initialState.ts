import { IStore } from '../../models';

export const initialState: IStore = {
    isLoading: false,
    /** default language is set to English */
    language: 'en',
    modal: {
        isModalOpened: false,
        modalType: undefined,
    },
    router: undefined,
    tasks: [],
};
