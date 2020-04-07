import { INITIAL__INIT } from '../../const/actions';
import { InitialAction } from '../../models'; 

export const init = (): InitialAction => ({
    type: INITIAL__INIT,
});
