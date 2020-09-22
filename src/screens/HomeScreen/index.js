import React from 'react';
import { ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

import {
	exclusiveContentData,
	meiData,
	receiveFromClientsData,
} from '../../utils/mocks';
import AnimationContainer from './components/AnimationContainer';
import BlogSection from './components/BlogSection';
import DASSection from './components/DASSection';
import HomeCategorySection from './components/HomeCategorySection';
import PayTaxBox from './components/PayTaxBox';

const HomeScreen = ({ navigation }) => {
	const sections = [
		{
			id: 0,
			name: 'Receber de seus clientes',
			categories: receiveFromClientsData,
		},
		{ id: 1, name: 'Seu MEI', categories: meiData },
		{ id: 2, name: 'Conteúdo Exclusivo', categories: exclusiveContentData },
	];

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<AnimationContainer>
				<PayTaxBox navigation={navigation} />
			</AnimationContainer>
			<AnimationContainer	delay={100}>
				<DASSection navigation={navigation} />
			</AnimationContainer>
			<AnimationContainer delay={200}>
				{sections.map((item, index) => {
					const indexValue = index + 4
					const itemDelay = indexValue * 100;
					return(
						<AnimationContainer 	
							key={item.id.toString()}
							delay={itemDelay}
						>
							<HomeCategorySection
								sectionTitle={item.name}
								categories={item.categories}
							/>
						</AnimationContainer>
					)})}
			</AnimationContainer>
			<Animatable.View delay={700}>
				<BlogSection />
			</Animatable.View>
		</ScrollView>
	);
};

export default HomeScreen;
