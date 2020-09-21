import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Button from '../../components/Button';
import DocumentPDFBox from './components/DocumentPDFBox';
import styles from './styles';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.background}>
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
      <Button
        text="Sair"
        onPress={() => NavigationPreloadManager.navigate('Login')}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
