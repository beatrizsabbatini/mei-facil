import { takeLatest, put, call } from 'redux-saga/effects';

import { getUserPersonalData } from '../../services/userService';
import {
	userSuccess,
	userErrors,
	Types
} from '../../store/ducks/user';

function* requestUserData() {
	try {

		const response = yield call(getUserPersonalData);

		yield put(userSuccess(response.data));
	} catch (err) {
		yield put(userErrors(err));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_USER_REQUEST, requestUserData)
}