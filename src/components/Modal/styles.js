import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    flex: 1,
    height: 'auto',
    backgroundColor: colors.White,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: metrics.doubleBaseMargin,
  },
  closeIcon: {
    position: 'absolute',
    top: metrics.baseMargin,
    right: metrics.baseMargin,
    padding: metrics.baseMargin,
  },
});

export default styles;
