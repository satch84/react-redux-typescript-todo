import { LANGUAGE__SELECT } from '../../const/actions';
import { initialState } from '../store/initialState';
import { language } from './reducerLanguage';

describe('Language reducer', () => {
    it('should return the initial state', () => {
        expect(language(undefined, { language: '', type: 'INITIAL__INIT' })).toEqual(initialState.language);
    });

    it('should handle LANGUAGE__SELECT', () => {
        const actual = 'en';
        expect(
            language(actual, {
                language: 'en',
                type: LANGUAGE__SELECT,
            }),
        ).toEqual('en');
    });
});
