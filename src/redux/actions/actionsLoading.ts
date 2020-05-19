import { LOADING__START, LOADING__STOP } from '../../const/actions';
import { LoadingStartAction, LoadingStopAction } from '../../models/InterfaceLoading';

export const loadingStartAction = (): LoadingStartAction => ({
    type: LOADING__START,
});

export const loadingStopAction = (): LoadingStopAction => ({
    type: LOADING__STOP,
});
