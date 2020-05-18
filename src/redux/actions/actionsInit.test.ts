import { INITIAL__INIT } from '../../const/actions';
import { init } from './actionsInit';

describe('action init', () => {
    it('should send a INITIAL__INIT action', () => {
        const expectedAction = { type: INITIAL__INIT };
        expect(init()).toEqual(expectedAction);
    });
});
