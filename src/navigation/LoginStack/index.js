import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../../screens/WelcomeScreen';

const Stack = createStackNavigator();

const LoginNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
