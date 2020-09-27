import { all } from 'redux-saga/effects';

import companySagas from './company.sagas'
import userSagas from './user.sagas';

export default function* rootSaga() {
	yield all([
		userSagas(),
		companySagas(),
	]);
}