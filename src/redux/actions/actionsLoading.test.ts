import { LOADING__START, LOADING__STOP } from '../../const/actions';
import { loadingStartAction, loadingStopAction } from './actionsLoading';

describe('action loading', () => {
    it('should send a LOADING__START action', () => {
        const expectedAction = { type: LOADING__START };
        expect(loadingStartAction()).toEqual(expectedAction);
    });

    it('should send a LOADING__STOP action', () => {
        const expectedAction = { type: LOADING__STOP };
        expect(loadingStopAction()).toEqual(expectedAction);
    });
});
