import React from 'react';
import { View } from 'react-native';
import PayTaxBox from './components/PayTaxBox';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PayTaxBox navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
