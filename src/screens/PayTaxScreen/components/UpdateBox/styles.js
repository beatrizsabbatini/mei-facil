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
		fontSize: fonts.large,
    
	},
	subtitle: {
		fontFamily: fonts.robotoRegular,
		fontSize: fonts.medium
	},
	message: {
		fontFamily: fonts.robotoRegular,
		fontSize: fonts.small,
		color: colors.TitleGrey
	}
});

export default styles;
