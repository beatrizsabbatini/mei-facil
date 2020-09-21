import { Dimensions, StyleSheet } from 'react-native';

import { fonts, metrics } from '../../styles';

const windowWidth = Dimensions.get('window').width;
const oneThirdOfScreenWidth = windowWidth / 3;
const itemWidth = oneThirdOfScreenWidth - metrics.bigMargin;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.baseMargin,
    height: itemWidth,
    width: itemWidth,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: metrics.smallMargin,
  },
  categoryName: {
    fontFamily: fonts.robotoBold,
    fontSize: fonts.medium,
    textAlign: 'center',
  },
});

export default styles;
