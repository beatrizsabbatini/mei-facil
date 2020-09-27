import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import company from './ducks/company';
import user from './ducks/user';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
	user,
	company,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;