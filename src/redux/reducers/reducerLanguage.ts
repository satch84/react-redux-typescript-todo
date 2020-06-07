import { LANGUAGE__SELECT } from '../../const/actions';
import { LanguageAction } from '../../models';
import { initialState } from '../store/initialState';

export const language = (state = initialState.language, action: LanguageAction) => {
    switch (action.type) {
        case LANGUAGE__SELECT: {
            const {
                language,
            } = action;

            return state = language;
        }

        default:
            return state;
    }
};
