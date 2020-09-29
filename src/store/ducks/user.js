// Action Types
export const Types = {
	GET_USER_REQUEST: 'user/get user request',
	GET_USER_ERRORS: 'user/ get user errors ',
	GET_USER_SUCCESS: 'user/ get user success',
};

//Initial state
const initialState = {
	cpf: undefined,
	token: undefined,
	data: undefined,
	errors: undefined,
	loading: false
};

//Reducer
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case Types.GET_USER_REQUEST:
		return {
			...state,
			loading: true,
			errors: undefined,
			token: action.payload.token,
			cpf: action.payload.cpf
		};
	case Types.GET_USER_ERRORS:
		return {
			...state,
			loading: false,
			errors: action.payload
		};
	case Types.GET_USER_SUCCESS:
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
export function userRequest({token, cpf}) {
	return {
		type: Types.GET_USER_REQUEST,
		payload: {token: token, cpf: cpf}
	};
}

export function userErrors(error) {
	return {
		type: Types.GET_USER_ERRORS,
		payload: error
	};
}

export function userSuccess(data) {
	return {
		type: Types.GET_USER_SUCCESS,
		payload: data
	};
}
