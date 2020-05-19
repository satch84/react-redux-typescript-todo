import { MODAL__HIDE, MODAL__SHOW } from '../../const/actions';
import { IActionTypes, ShowModalAction } from '../../models';
import { initialState } from '../store/initialState';

export const modal = (state = initialState.modal, action: IActionTypes) => {
    switch (action.type) {
        case MODAL__HIDE:
            return {
                ...state,
                isModalOpened: false,
                modalType: undefined,
            }

        case MODAL__SHOW: 
            const {
                modalType,
            } = action as ShowModalAction;

            return {
                ...state,
                isModalOpened: true,
                modalType,
            }

        default:
            return state;
    }
};
