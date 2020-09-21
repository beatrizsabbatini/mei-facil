
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { colors } from '../../../../styles';
import styles from './styles';

const ButtonsListItem = ({ item, navigation }) => {
	return (
		<>
			<TouchableOpacity
				style={styles.container}
				onPress={() => navigation.navigate(item.navigateTo)}
			>
				<View style={styles.containerLeft}>
					<Image style={styles.icon} source={item.imgPath} />
					<Text style={styles.buttonTitle}>{item.title}</Text>
				</View>
				<FontAwesome
					name="long-arrow-right"
					size={24}
					color={colors.DarkerYellow}
				/>
			</TouchableOpacity>
			<View style={styles.separator} />
		</>
	);
};

export default ButtonsListItem;
