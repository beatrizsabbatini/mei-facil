import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    margin: metrics.doubleBaseMargin,
  },
  seeCompleteList: {
    fontFamily: fonts.robotoBold,
    fontSize: fonts.medium,
    color: colors.Blue,
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'right',
    padding: metrics.doubleBaseMargin,
  },
});

export default styles;
