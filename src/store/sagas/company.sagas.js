import { takeLatest, put, call } from 'redux-saga/effects';

import { getCompanyData } from '../../services/companyService';
import {
	companySuccess,
	companyErrors,
	Types,
} from '../../store/ducks/company';

function* requestCompanyData({payload}) {
	try {
		const response = yield call(getCompanyData, {token: payload.token});

		yield put(companySuccess(response.data));
	} catch (err) {
		console.log(err.response.data.message)
		console.log('token:', payload.token)
		yield put(companyErrors(err.response.data.message));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_COMPANY_REQUEST, requestCompanyData)
}