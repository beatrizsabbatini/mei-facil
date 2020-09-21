import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Primary,
    padding: metrics.baseMargin,
    width: '100%',
    alignSelf: 'center',
    marginVertical: metrics.doubleBaseMargin,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: fonts.medium,
    backgroundColor: colors.White,
    color: colors.Blue,
    textAlign: 'center',
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingTop: 4,
    borderRadius: metrics.baseRadius,
    marginVertical: 3,
    textTransform: 'uppercase',
  },
  message: {
    fontFamily: fonts.poppinsMedium,
    color: colors.White,
    fontSize: fonts.large,
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export default styles;
