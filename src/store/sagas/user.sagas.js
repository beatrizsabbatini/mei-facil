import { takeLatest, put, call } from 'redux-saga/effects';

import { getUserPersonalData } from '../../services/userService';
import {
	userSuccess,
	userErrors,
	Types
} from '../../store/ducks/user';

function* requestUserData({payload}) {
	try {

		const response = yield call(getUserPersonalData, {token: payload.token, cpf: payload.cpf});

		yield put(userSuccess(response.data));
	} catch (err) {
		console.log(err.response.data.message)
		console.log('token:', payload.token)
		yield put(userErrors(err.response.data.message));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_USER_REQUEST, requestUserData)
}