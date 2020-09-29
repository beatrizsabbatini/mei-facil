// Action Types
export const Types = {
	AUTHENTICATION_REQUEST: 'auth/ authentication request',
	AUTHENTICATION_ERRORS: 'auth/ authentication errors ',
	AUTHENTICATION_SUCCESS: 'auth/ authentication success',
	AUTHENTICATION_RESET: 'auth/ authentication reset',
};

//Initial state
const initialState = {
	token: undefined,
	errors: undefined,
	loading: false
};

//Reducer
export default function reducer(state = initialState, action) {
	switch (action.type) {
	case Types.AUTHENTICATION_REQUEST:
		return {
			...state,
			loading: true,
			errors: undefined,
			cpf: action.payload.cpf,
			password: action.payload.password
		};
	case Types.AUTHENTICATION_ERRORS:
		return {
			...state,
			loading: false,
			errors: action.payload
		};
	case Types.AUTHENTICATION_SUCCESS:
		return {
			...state,
			errors: undefined,
			loading: false,
			token: action.payload
		};
	case Types.AUTHENTICATION_RESET:
		return {
			...state,
			errors: undefined,
			loading: false,
			token: undefined
		}

	default:
		return state;
	}
}

// Action Creators
export function authenticationRequest({cpf, password, navigation, navigateTo}) {
	return {
		type: Types.AUTHENTICATION_REQUEST,
		payload: {cpf: cpf, password: password}
	};
}

export function authenticationErrors(error) {
	return {
		type: Types.AUTHENTICATION_ERRORS,
		payload: error
	};
}

export function authenticationSuccess(token) {
	return {
		type: Types.AUTHENTICATION_SUCCESS,
		payload: token
	};
}

export function authenticationReset(){
	return {
		type: Types.AUTHENTICATION_RESET
	}
}
