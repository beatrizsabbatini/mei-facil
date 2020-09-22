import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';

import BounceInUpAnimationContainer from '../../components/BounceInUpAnimationContainer';
import Button from '../../components/Button';
import TaxContainer from '../../components/TaxContainer';
import { taxesData } from '../../utils/mocks';
import UpdateBox from './components/UpdateBox';
import styles from './styles';

const PayTaxScreen = () => {
	return (
		<>
			<ScrollView contentContainerStyle={styles.background} showsVerticalScrollIndicator={false}>
				<BounceInUpAnimationContainer>
					<UpdateBox />
				</BounceInUpAnimationContainer>
				<FlatList  
					data={taxesData} keyExtractor={item => item.id.toString()} renderItem={({item, index}) => {
						const indexValue = index + 2
						const itemDelay = indexValue * 100;
						return(
							<BounceInUpAnimationContainer delay={itemDelay} >
								<TaxContainer
									key={item.id}
									status={item.status}
									date={item.date}
									monthAndYear={item.monthAndYear}
									hideLine={item.hideLine}
								/>
							</BounceInUpAnimationContainer>
						)}} />
			
			</ScrollView>
			<View style={styles.buttonContainer}>
				<Button text="2020" />
			</View>	
		</>
	);
};

export default PayTaxScreen;
