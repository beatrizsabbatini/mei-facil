import { Fontisto } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { colors } from '../../styles';
import styles from './styles';

const WelcomeScreen = () => {
  async function openBrowser() {
    await WebBrowser.openBrowserAsync('https://www.meifacil.com/duvidas');
  }

  return (
    <View style={styles.container}>
      <Logo />
      <View style={[styles.basicView, styles.centeredView]}>
        <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
        <Text style={styles.welcomeMessage}>
          Tudo que você precisa para o seu MEI em um só lugar
        </Text>
      </View>
      <View style={styles.basicView}>
        <Button
          text="Tenho CNPJ mei"
          icon={
            <Fontisto name="arrow-right-l" size={24} color={colors.Black} />
          }
        />
        <Button
          text="Abrir um CNPJ mei"
          icon={
            <Fontisto name="arrow-right-l" size={24} color={colors.Black} />
          }
        />
        <TouchableOpacity onPress={() => openBrowser()}>
          <Text style={styles.frequentQuestions}>perguntas frequentes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
