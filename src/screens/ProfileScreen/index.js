import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        text="Sair"
        onPress={() => NavigationPreloadManager.navigate('Login')}
      />
    </View>
  );
};

export default ProfileScreen;
