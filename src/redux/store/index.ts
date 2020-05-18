import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import { NODE_ENV } from '../../const/environment'; 
import { loadSerializedState, saveState } from '../../tools';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleWare();

    let store: any;

    if (NODE_ENV === 'development') {
        /** get redux dev-tools for development environment */
        const composeEnhancers = composeWithDevTools({ name: 'todoApp' });
        store = createStore(
            rootReducer,
            loadSerializedState(),
            composeEnhancers(applyMiddleware(sagaMiddleware)),
        );
    }
    else {
        store = createStore(
            rootReducer,
            loadSerializedState(),
            applyMiddleware(sagaMiddleware),
        );
    }

    /** to be replaced? */
    store.subscribe(() => {
        saveState({
            tasks: store.getState().tasks
        });
    });

    sagaMiddleware.run(rootSaga)
    return { store };
}
