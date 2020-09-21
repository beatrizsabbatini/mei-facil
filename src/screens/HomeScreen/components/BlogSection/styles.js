import { Dimensions, StyleSheet } from 'react-native';

import { fonts, metrics } from '../../../../styles';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		width: windowWidth - windowWidth / 3,
		height: 150,
		padding: metrics.doubleBaseMargin,
		margin: 4,
	},
	title: {
		fontFamily: fonts.robotoBold,
		paddingVertical: 2,
	},
	text: {
		paddingTop: metrics.smallMargin,
		fontFamily: fonts.robotoThin,
		fontSize: fonts.small,
		lineHeight: 20,
		paddingVertical: 2,
	},
	sectionContainer: {
		marginBottom: metrics.bigMargin,
	},
});

export default styles;
