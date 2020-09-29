import { CommonActions } from '@react-navigation/native';

let navigator;
export function setNavigator(nav) {
	if (nav) {
		navigator = nav;
	}
}

export function navigate(routeName, params) {
	
	if (navigator && routeName) {
		console.log('navigator dispatch:')
		console.log(navigator.dispatch)
		console.log('route:', routeName)
		navigator.dispatch(
			CommonActions.navigate({
				name: routeName,
				params: params
			})
		);
	}
}