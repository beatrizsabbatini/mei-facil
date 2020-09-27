// Action Types
export const Types = {
	GET_COMPANY_REQUEST: 'COMPANY/get company request',
	GET_COMPANY_ERRORS: 'COMPANY/ get company errors ',
	GET_COMPANY_SUCCESS: 'COMPANY/ get company success',
};

//Initial state
const initialState = {
	data: undefined,
	errors: undefined,
	loading: false
};

//Reducer
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case Types.GET_COMPANY__REQUEST:
		return {
			...state,
			loading: true,
			errors: undefined,
			cpf: action.payload
		};
	case Types.GET_COMPANY_ERRORS:
		return {
			...state,
			loading: false,
			errors: action.payload
		};
	case Types.GET_COMPANY_SUCCESS:
		return {
			...state,
			errors: undefined,
			loading: false,
			data: action.payload
		};

	default:
		return state;
	}
}

// Action Creators
export function companyRequest(cpf) {
	return {
		type: Types.GET_COMPANY_REQUEST,
		payload: cpf
	};
}

export function companyErrors(cpf) {
	return {
		type: Types.GET_COMPANY_ERRORS,
		payload: cpf
	};
}

export function companySuccess(data) {
	return {
		type: Types.GET_COMPANY_SUCCESS,
		payload: data
	};
}
