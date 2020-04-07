import { LOADING__START, LOADING__STOP } from '../../const/actions';
import { ILoadingStartAction, ILoadingStopAction } from '../../models/InterfaceLoading';

export const loadingStartAction = (): ILoadingStartAction => ({
    type: LOADING__START,
});

export const loadingStopAction = (): ILoadingStopAction => ({
    type: LOADING__STOP,
});
