import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
	commonStyles: {
		fontFamily: fonts.robotoBold,
		color: colors.Black,
	},
	paid: {
		backgroundColor: colors.LightGreen,
	},
	open: {
		backgroundColor: colors.LightYellow,
	},
	taxContainer: {
		padding: metrics.regularMargin,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	statusContainer: {
		padding: 7,
		paddingHorizontal: metrics.regularMargin,
		borderRadius: metrics.baseRadius,
	},
	title: {
		fontFamily: fonts.robotoBold,
		paddingVertical: 2,
	},
	subtitle: {
		fontFamily: fonts.robotoThin,
		fontSize: fonts.small,
		paddingVertical: 2,
	},
	separator: {
		height: 0.5,
		backgroundColor: colors.ButtonDisabled,
		width: '100%',
	},
});

export default styles;
