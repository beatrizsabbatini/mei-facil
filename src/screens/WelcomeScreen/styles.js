import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles/index';

const styles = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: colors.Primary,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: metrics.bigMargin,
	},
	welcomeTitle: {
		fontFamily: fonts.robotoBold,
		color: colors.White,
		fontSize: fonts.big,
		paddingVertical: metrics.baseMargin,
	},
	welcomeMessage: {
		fontFamily: fonts.robotoRegular,
		fontSize: fonts.big,
		color: colors.White,
		textAlign: 'center',
		width: '80%',
		paddingVertical: metrics.doubleBaseMargin,
	},
	frequentQuestions: {
		fontSize: fonts.regular,
		color: colors.White,
		textTransform: 'uppercase',
		letterSpacing: 2,
		fontFamily: fonts.robotoBold,
		paddingVertical: metrics.doubleBaseMargin,
	},
	basicView: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
	},
	centeredView: {
		justifyContent: 'center',
	},
});

export default styles;
