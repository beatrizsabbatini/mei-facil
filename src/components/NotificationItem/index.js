
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { colors } from '../../styles';
import styles from './styles';

const NotificationItem = ({ item }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.iconAndDateContainer}>
				<Image source={item.imgPath} style={styles.icon} />
				<Text style={styles.date}>{item.date}</Text>
			</View>
			<View style={styles.titleAndDescriptionContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>{item.description}</Text>
			</View>
			<TouchableOpacity style={styles.arrowContainer}>
				<MaterialIcons
					name="keyboard-arrow-right"
					size={24}
					color={colors.Secondary}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

export default NotificationItem;
