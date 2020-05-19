import { MODAL__HIDE, MODAL__SHOW } from '../../const/actions';
import { HideModalAction, ShowModalAction } from '../../models';

export const showModal = (modalType: string): ShowModalAction => ({
    modalType,
    type: MODAL__SHOW,
});

export const hideModal = (): HideModalAction => ({
    type: MODAL__HIDE,
});
