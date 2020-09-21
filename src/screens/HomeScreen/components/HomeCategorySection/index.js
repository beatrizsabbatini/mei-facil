import React from 'react';
import { View } from 'react-native';

import BasicTitle from '../../../../components/BasicTitle';
import CategoriesList from '../../../../components/CategoriesList';
import { metrics } from '../../../../styles';
import styles from './styles';

const HomeCategorySection = ({ categories, sectionTitle }) => {
	return (
		<View style={styles.container}>
			<BasicTitle
				title={sectionTitle}
				customStyle={{ marginBottom: metrics.regularMargin }}
			/>
			<CategoriesList categories={categories} />
		</View>
	);
};
export default HomeCategorySection;
