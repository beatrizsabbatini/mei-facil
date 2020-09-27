import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const InfoContainer = ({title, value, style}) => {
	return ( 
		<View style={[styles.container, style]}>
			<Text style={[styles.text, styles.title]}>{title}</Text>
			<Text style={[styles.text, styles.value]}>{value}</Text>
		</View>
	)
}

export default InfoContainer;