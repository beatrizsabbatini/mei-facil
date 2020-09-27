import { takeLatest, put, call } from 'redux-saga/effects';

import { getCompanyData } from '../../services/companyService';
import {
	companySuccess,
	companyErrors,
	Types,
} from '../../store/ducks/company';

function* requestCompanyData() {
	try {
		const response = yield call(getCompanyData);

		yield put(companySuccess(response.data));
	} catch (err) {
		yield put(companyErrors(err));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_COMPANY_REQUEST, requestCompanyData)
}