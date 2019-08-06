import { LOADING__START, LOADING__STOP } from '../../const/actions';
import { ILoadingStartAction, ILoadingStopAction } from '../../models/InterfaceLoading';

export const loadingStartAction = (): ILoadingStartAction => ({
    payload: null,
    type: LOADING__START,
});

export const loadingStopAction = (): ILoadingStopAction => ({
    payload: null,
    type: LOADING__STOP,
});
