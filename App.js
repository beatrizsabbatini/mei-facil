import * as React from 'react';
import { Provider } from 'react-redux';

import {
	Poppins_500Medium,
	Poppins_600SemiBold
} from '@expo-google-fonts/poppins';
import {
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_700Bold,
	useFonts
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';

import AppNavigator from './src/routes';
import store from './src/store';

const App = () => {
	let [fontsLoaded] = useFonts({
		Roboto_700Bold,
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_500Medium,
		Poppins_500Medium,
		Poppins_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider store={store}>
				<NavigationContainer>
					<AppNavigator />
				</NavigationContainer>
			</Provider>
		);
	}
};

export default App;
