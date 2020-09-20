import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import HomeStack from './HomeStack';
import LoginStack from './LoginStack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Login" component={LoginStack} />
        <Stack.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
    </>
  );
};

export default AppNavigator;
