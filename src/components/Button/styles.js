import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: metrics.doubleBaseMargin,
    paddingHorizontal: metrics.doubleBaseMargin,
    flexDirection: 'row',
    backgroundColor: colors.Secondary,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: metrics.smallRadius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonTitle: {
    fontSize: fonts.regular,
    color: colors.Black,
    fontFamily: fonts.robotoBold,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
