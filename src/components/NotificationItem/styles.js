import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.doubleBaseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flex: 6,
  },
  iconAndDateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  date: {
    fontFamily: fonts.robotoThin,
    fontSize: fonts.small,
    paddingTop: metrics.smallMargin,
    color: colors.TextGrey,
  },
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: fonts.regular,
    color: colors.TextGrey,
  },
  description: {
    fontFamily: fonts.robotoRegular,
    fontSize: fonts.medium,
    color: colors.ButtonTextDisabled,

    textAlign: 'left',
  },
  titleAndDescriptionContainer: {
    flex: 4,
    paddingLeft: metrics.doubleBaseMargin,
  },
  arrowContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
