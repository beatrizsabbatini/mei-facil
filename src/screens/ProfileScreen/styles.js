import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.BackgroundGrey,
    padding: metrics.doubleBaseMargin,
  },
  hello: {
    fontFamily: fonts.robotoThin,
    color: colors.DarkBlue,
    fontSize: fonts.big,
  },
  name: {
    fontFamily: fonts.robotoRegular,
    color: colors.DarkBlue,
    fontSize: fonts.hero,
    width: '70%',
  },
  userInfo: {
    fontFamily: fonts.robotoThin,
    color: colors.ButtonTextDisabled,
    fontSize: fonts.small,
    lineHeight: 20,
  },
  userInfoContainer: {
    marginVertical: metrics.baseMargin,
  },
  documentsPDFContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: metrics.doubleBaseMargin,
  },
});

export default styles;
