import React from 'react';
import { FlatList } from 'react-native';

import CategoryBox from '../CategoryBox';
import styles from './styles';

const CategoriesList = ({ categories }) => {
	const numberOfColumns = 3;
	return (
		<FlatList
			style={styles.list}
			data={categories}
			numColumns={numberOfColumns}
			keyExtractor={(item) => item.categoryId.toString()}
			renderItem={({ item }) => <CategoryBox item={item} />}
		/>
	);
};

export default CategoriesList;
