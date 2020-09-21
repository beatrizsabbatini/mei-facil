import { Dimensions, StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../../../styles';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		width: '43%',
	},
	image: {
		height: 40,
		width: 40,
	},
	containerTop: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: metrics.regularMargin,
	},
	title: {
		fontFamily: fonts.robotoBold,
		fontSize: fonts.small,
		color: colors.Black,
	},
	subtitle: {
		fontFamily: fonts.robotoBold,
		fontSize: fonts.big,
		color: colors.Black,
	},
	greyLine: {
		height: 3,
		width: '80%',
		backgroundColor: '#EEF2F1',
	},
	seePDF: {
		color: colors.DarkerYellow,
		fontFamily: fonts.robotoBold,
		padding: metrics.baseMargin,
		marginLeft: metrics.smallMargin,
		fontSize: fonts.regular,
	},
});

export default styles;
