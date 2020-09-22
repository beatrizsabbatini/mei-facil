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
		fontSize: 20,
    
	},
	subtitle: {
		marginVertical: metrics.baseMargin,
		fontFamily: fonts.robotoRegular,
		fontSize: 15,
		lineHeight: 22
	},
	message: {
		marginVertical: metrics.smallMargin,
		fontFamily: fonts.robotoRegular,
		fontSize: 12,
		color: colors.ButtonTextDisabled
	},
	updateTaxesButton: {
		marginTop: metrics.baseMargin,
		fontFamily: fonts.robotoBold,
		letterSpacing: 2,
		fontSize: fonts.regular,
		padding: 8,
		textAlign: 'center',
		paddingTop: 15,
		textTransform: 'uppercase',
		borderWidth: 3,
		color: colors.Black,
		borderColor: colors.Secondary,
		borderRadius: metrics.smallRadius
	}
});

export default styles;
