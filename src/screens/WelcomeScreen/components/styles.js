import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const styles = StyleSheet.create({
  modalTitle: {
    fontFamily: fonts.robotoThin,
    fontSize: fonts.big,
    color: colors.DarkBlue,
    flex: 1,
  },
  cpfContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  contentContainer: {
    marginTop: 24,
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  yellowLine: {
    backgroundColor: colors.Secondary,
    height: 3,
    width: '100%',
    marginTop: metrics.smallMargin,
  },
  cpfText: {
    fontFamily: fonts.robotoMedium,
    fontSize: fonts.medium,
    color: colors.Black,
  },
  agreeToTermsFirstLine: {
    marginTop: metrics.doubleBaseMargin,
    lineHeight: 20,
    fontFamily: fonts.robotoThin,
    color: colors.Black,
  },
  agreeToTermsSecondLine: {
    fontFamily: fonts.robotoBold,
    color: colors.LightBlue,
  },
  input: {
    marginTop: metrics.baseMargin,
    fontSize: fonts.large,
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    paddingTop: metrics.baseMargin,
  },
});

export default styles;
