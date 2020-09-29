import { AsyncStorage } from 'react-native';

import { takeLatest, put, call } from 'redux-saga/effects';

import { authenticateUser } from '../../services/authenticationService';
import { navigate } from '../../services/navigationService';
import {
	authenticationSuccess,
	authenticationErrors,
	Types
} from '../../store/ducks/authentication';

function* requestAuthentication({payload}) {


	try {

		const response = yield call(authenticateUser, {cpf: payload.cpf, password: payload.password});

		AsyncStorage.setItem('token', response.data.token);

		yield put(authenticationSuccess(response.data.token));

		yield navigate('Home');

	} catch (err) {

		console.log(err.response.data.message)
		yield put(authenticationErrors(err.response.data.message));
	}
}

export default function* root() {
	yield takeLatest(Types.AUTHENTICATION_REQUEST, requestAuthentication)
}