import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import LoginStack from './LoginStack';

const AppNavigator = () => {
  return (
    <>
      <StatusBar style="light" />
      <LoginStack />
    </>
  );
};

export default AppNavigator;
