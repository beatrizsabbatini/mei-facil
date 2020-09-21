import React from 'react';
import { View } from 'react-native';

import UpdateBox from './components/UpdateBox';
import styles from './styles';

const PayTaxScreen = () => {
	return (
		<View style={styles.background}>
			<UpdateBox />
      
		</View>
	);
};

export default PayTaxScreen;
