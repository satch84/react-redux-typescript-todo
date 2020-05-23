import { LANGUAGE__SELECT } from '../../const/actions';
import { selectLanguage } from './actionsLanguage';

describe('action language', () => {
    it('should send a LANGUAGE__SELECT action', () => {
        const expectedAction = {
            language: 'en',
            type: LANGUAGE__SELECT,
        };
        expect(selectLanguage('en')).toEqual(expectedAction);
    });
});
