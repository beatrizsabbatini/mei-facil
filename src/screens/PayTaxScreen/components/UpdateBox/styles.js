import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.White,
		borderRadius: metrics.smallRadius,
		width: '100%',
		padding: metrics.doubleBaseMargin
	},
	title:{
		color: colors.TitleBlack,
		fontFamily: fonts.robotoBold,
		fontSize: 22,
    
	},
	subtitle: {
		marginVertical: metrics.baseMargin,
		fontFamily: fonts.robotoRegular,
		fontSize: fonts.regular,
		lineHeight: 22
	},
	message: {
		marginVertical: metrics.smallMargin,
		fontFamily: fonts.robotoRegular,
		fontSize: fonts.small,
		color: colors.ButtonTextDisabled
	}
});

export default styles;
