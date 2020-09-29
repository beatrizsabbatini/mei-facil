import { all } from 'redux-saga/effects';

import authenticationSagas from './authentication.sagas';
import companySagas from './company.sagas'
import userSagas from './user.sagas';

export default function* rootSaga() {
	yield all([
		userSagas(),
		companySagas(),
		authenticationSagas()
	]);
}