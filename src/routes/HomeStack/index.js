import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
	FontAwesome5,
	MaterialCommunityIcons,
	MaterialIcons,
} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import Logo from '../../components/Logo';
import HomeScreen from '../../screens/HomeScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
import PayTaxScreen from '../../screens/PayTaxScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import { colors, metrics } from '../../styles';

const Stack = createStackNavigator();

const HomeNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					headerStyle: {
						backgroundColor: colors.Blue,
					},
					headerTintColor: colors.White,
					headerTitle: () => <Logo />,
					headerTitleAlign: 'center',
					headerRight: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('NotificationsScreen')}
						>
							<MaterialIcons
								name="notifications-none"
								size={23}
								color={colors.White}
								style={{ paddingRight: 40 }}
							/>
						</TouchableOpacity>
					),
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate('ProfileScreen')}
						>
							<FontAwesome5
								name="user"
								size={19}
								color={colors.White}
								style={{ paddingLeft: 40 }}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="NotificationsScreen"
				component={NotificationsScreen}
				options={{
					headerStyle: {
						backgroundColor: colors.Primary,
					},
					headerTintColor: colors.White,
					headerTitle: 'Notificações',
					headerTitleAlign: 'left',
				}}
			/>
			<Stack.Screen
				name="PayTaxScreen"
				component={PayTaxScreen}
				options={{
					headerStyle: {
						backgroundColor: colors.Primary,
					},
					headerTintColor: colors.White,
					headerTitle: 'Pagar imposto',
					headerTitleAlign: 'left',
				}}
			/>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					headerStyle: {
						backgroundColor: '#DDDDDD',
						elevation: 0,
					},
					headerTintColor: colors.White,
					headerTitle: '',
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
							<MaterialCommunityIcons
								name="arrow-left"
								size={26}
								color={colors.DarkerYellow}
								style={{ paddingLeft: metrics.baseMargin }}
							/>
						</TouchableOpacity>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeNavigator;
