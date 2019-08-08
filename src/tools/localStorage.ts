import { ISerializedState } from '../models';

export const loadSerializedState = (): ISerializedState => {
    const serializedState = localStorage.getItem('current_tasklist');

    if (!serializedState) {
        return;
    }

    return JSON.parse(serializedState);
};

export const saveState = (state: ISerializedState) => {
    const currentSate = JSON.parse(localStorage.getItem('current_tasklist'));
    const serializedState = JSON.stringify({ ...currentSate, ...state });

    localStorage.setItem('current_tasklist', serializedState);
};

export const clearState = () => {
    localStorage.removeItem('current_tasklist');
};
