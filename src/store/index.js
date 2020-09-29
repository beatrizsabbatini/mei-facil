import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import authentication from './ducks/authentication';
import company from './ducks/company';
import user from './ducks/user';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
	user,
	company,
	authentication
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;