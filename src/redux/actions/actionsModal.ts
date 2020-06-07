import { MODAL__CANCEL, MODAL__CONFIRM, MODAL__SHOW } from '../../const/actions';
import { ShowModalAction } from '../../models';

export const showModal = (modalType: string): ShowModalAction => ({
    modalType,
    type: MODAL__SHOW,
});

export const confirmModal = () => ({
    type: MODAL__CONFIRM,
});

export const cancelModal = () => ({
    type: MODAL__CANCEL,
});
