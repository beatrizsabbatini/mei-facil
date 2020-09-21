import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

import BasicContainer from '../BasicContainer';
import styles from './styles';

const CategoryBox = ({ item }) => {
	return (
		<TouchableOpacity onPress={() => {}}>
			<BasicContainer style={styles.container}>
				<Image source={item.imgPath} style={styles.image} />
				<Text style={styles.categoryName}>{item.categoryName}</Text>
			</BasicContainer>
		</TouchableOpacity>
	);
};

export default CategoryBox;
