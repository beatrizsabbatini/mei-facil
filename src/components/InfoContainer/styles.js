import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
	text: {
		fontFamily: fonts.robotoBold,
		fontSize: fonts.large,
	},
	value: {
		color: colors.TitleGrey
	},
	title: {
		color: colors.Grey
	},
	container:{
		paddingVertical: metrics.baseMargin,
	}

})

export default styles;