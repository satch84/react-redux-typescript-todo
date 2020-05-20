import { MODAL__CANCEL, MODAL__CONFIRM, MODAL__SHOW } from '../../const/actions';
import { cancelModal, confirmModal, showModal } from './actionsModal';

describe('action modals', () => {
    it('should send a MODAL__SHOW action', () => {
        const expectedAction = {
            modalType: 'warning',
            type: MODAL__SHOW,
        };
        expect(showModal('warning')).toEqual(expectedAction);
    });

    it('should send a MODAL__CANCEL action', () => {
        const expectedAction = {
            type: MODAL__CANCEL,
        };
        expect(cancelModal()).toEqual(expectedAction);
    });

    it('should send a MODAL__CONFIRM action', () => {
        const expectedAction = {
            type: MODAL__CONFIRM,
        };
        expect(confirmModal()).toEqual(expectedAction);
    });
});
