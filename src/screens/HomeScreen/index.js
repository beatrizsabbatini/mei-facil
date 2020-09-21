import React from 'react';
import { ScrollView } from 'react-native';
import {
  exclusiveContentData,
  meiData,
  receiveFromClientsData,
} from '../../utils/mocks';
import BlogSection from './components/BlogSection';
import DASSection from './components/DASSection';
import HomeCategorySection from './components/HomeCategorySection';
import PayTaxBox from './components/PayTaxBox';
import styles from './styles';

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
    <ScrollView contentContainerStyle={styles.homeScreenContainer}>
      <PayTaxBox navigation={navigation} />
      <DASSection />
      {sections.map((item) => (
        <HomeCategorySection
          sectionTitle={item.name}
          categories={item.categories}
          key={item.id.toString()}
        />
      ))}
      <BlogSection />
    </ScrollView>
  );
};

export default HomeScreen;
