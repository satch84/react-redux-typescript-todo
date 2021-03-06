import { MODAL__CANCEL, MODAL__CONFIRM, MODAL__HIDE, MODAL__SHOW } from '../../const/actions';
import { initialState } from '../store/initialState';
import { modal } from './reducerModal';

describe('Modal reducer', () => {
    it('should return the initial state', () => {
        expect(modal(undefined, { type: MODAL__HIDE })).toEqual(initialState.modal);
    });

    it('should handle MODAL__HIDE', () => {
        const actual = { isModalOpened: false, modalType: 'warning' };
        expect(
            modal(actual, {
                type: MODAL__HIDE,
            }),
        ).toEqual({ isModalOpened: false, modalType: undefined });
    });

    it('should handle MODAL__SHOW', () => {
        const actual = { isModalOpened: false, modalType: '' };
        expect(
            modal(actual, {
                modalType: 'warning',
                type: MODAL__SHOW,
            }),
        ).toEqual({ isModalOpened: true, modalType: 'warning' });
    });

    it('should handle MODAL__CONFIRM', () => {
        const actual = { isModalOpened: true, modalType: 'warning' };
        expect(
            modal(actual, {
                type: MODAL__CONFIRM,
            }),
        ).toEqual({ isModalOpened: false, modalType: undefined });
    });

    it('should handle MODAL__CANCEL', () => {
        const actual = { isModalOpened: false, modalType: 'warning' };
        expect(
            modal(actual, {
                type: MODAL__CANCEL,
            }),
        ).toEqual({ isModalOpened: false, modalType: undefined });
    });
});
