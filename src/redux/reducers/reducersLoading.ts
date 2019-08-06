import { LOADING__START, LOADING__STOP } from '../../const/actions';
import { IActionTypes } from '../../models';
import { initialState } from '../store/initialState';

export const isLoading = (state = initialState.isLoading, action: IActionTypes): boolean => {
    const { type } = action;

    switch (type) {
        case LOADING__START:
            return true;
        case LOADING__STOP:
            return false;
        default:
            return state;
    }
};
