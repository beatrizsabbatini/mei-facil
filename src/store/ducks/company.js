// Action Types
export const Types = {
	GET_COMPANY_REQUEST: 'COMPANY/get company request',
	GET_COMPANY_ERRORS: 'COMPANY/ get company errors ',
	GET_COMPANY_SUCCESS: 'COMPANY/ get company success',
};

//Initial state
const initialState = {
	token: undefined,
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
			token: action.payload
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
export function companyRequest(token) {
	return {
		type: Types.GET_COMPANY_REQUEST,
		payload: token
	};
}

export function companyErrors(error) {
	return {
		type: Types.GET_COMPANY_ERRORS,
		payload: error
	};
}

export function companySuccess(data) {
	return {
		type: Types.GET_COMPANY_SUCCESS,
		payload: data
	};
}
