import { INITIAL__INIT, LOADING__START, LOADING__STOP } from '../../const/actions';
import { initialState } from '../store/initialState';
import { isLoading } from './reducerLoading';

describe('Loading reducer', () => {
    it('should return the initial state', () => {
        expect(isLoading(undefined, { type: INITIAL__INIT })).toEqual(initialState.isLoading);
    });

    it('should handle LOADING__START', () => {
        expect(
            isLoading(false, {
                type: LOADING__START,
            }),
        ).toEqual(true);
    });

    it('should handle LOADING__STOP', () => {
        expect(
            isLoading(true, {
                type: LOADING__STOP,
            }),
        ).toEqual(false);
    });
});
