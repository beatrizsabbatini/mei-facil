import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo';
import HomeScreen from '../../screens/HomeScreen';
import { colors } from '../../styles';

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
            <TouchableOpacity onPress={() => {}}>
              <MaterialIcons
                name="notifications-none"
                size={23}
                color={colors.White}
                style={{ paddingRight: 40 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome5
                name="user"
                size={20}
                color={colors.White}
                style={{ paddingLeft: 40 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
