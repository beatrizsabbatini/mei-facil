import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { profileButtonsData } from '../../utils/mocks';
import ButtonsListItem from './components/ButtonsListItem';
import DocumentPDFBox from './components/DocumentPDFBox';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.background}>
        <Text style={styles.hello}>Olá</Text>
        <Text style={styles.name}>BEATRIZ SCHWARTZ SABBATINI BARBOSA</Text>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfo}>beatriz.sabbatini@gmail.com</Text>
          <Text style={styles.userInfo}>CNPJ/MEI: 38.238.957/0001-43</Text>
        </View>
        <View style={styles.documentsPDFContainer}>
          <DocumentPDFBox documentName="CCMEI" documentType="Certificado" />
          <DocumentPDFBox documentName="CNPJ" documentType="Cartão" />
        </View>
      </View>
      {profileButtonsData.map((item) => (
        <ButtonsListItem
          key={item.id.toString()}
          item={item}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

export default ProfileScreen;
