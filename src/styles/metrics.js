import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  bigMargin: 25,
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  baseRadius: 25,
  smallRadius: 8,
};

export default metrics;
