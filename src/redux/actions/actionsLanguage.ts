import { LANGUAGE__SELECT } from '../../const/actions';
import { SelectLanguageAction } from '../../models';

export const selectLanguage = (language: string): SelectLanguageAction => ({
    language,
    type: LANGUAGE__SELECT,
});
