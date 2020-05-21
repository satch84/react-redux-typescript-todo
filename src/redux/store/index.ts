import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import { config } from '../../config/config'; 
import { loadSerializedState } from '../../tools';
import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleWare();

    let store: any;

    if (config.env === 'development') {
        /** get redux dev-tools for development environment */
        const composeEnhancers = composeWithDevTools({ name: 'todoApp' });
        store = createStore(
            rootReducer,
            loadSerializedState(),
            composeEnhancers(applyMiddleware(sagaMiddleware)),
        );
        sagaMiddleware.run(rootSaga);
        return { store };
    }

    store = createStore(
        rootReducer,
        loadSerializedState(),
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return { store };
}
