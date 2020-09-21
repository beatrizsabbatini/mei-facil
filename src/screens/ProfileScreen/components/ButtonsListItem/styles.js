import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: colors.White,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: metrics.doubleBaseMargin,
	},
	containerLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	separator: {
		height: 1,
		backgroundColor: colors.BackgroundGrey,
		width: '100%',
	},
	icon: {
		height: 16,
		width: 16,
		marginHorizontal: metrics.baseMargin,
	},
	buttonTitle: {
		fontFamily: fonts.robotoBold,
		marginHorizontal: metrics.doubleBaseMargin,
		color: colors.TitleGrey,
	},
});

export default styles;
