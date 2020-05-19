import { MODAL__HIDE, MODAL__SHOW } from '../../const/actions';
import { hideModal, showModal } from './actionsModal';

describe('action modals', () => {
    it('should send a MODAL__HIDE action', () => {
        const expectedAction = { type: MODAL__HIDE };
        expect(hideModal()).toEqual(expectedAction);
    });

    it('should send a MODAL__SHOW action', () => {
        const expectedAction = {
            modalType: 'warning',
            type: MODAL__SHOW,
        };
        expect(showModal('warning')).toEqual(expectedAction);
    });
});
