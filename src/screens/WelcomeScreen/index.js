import { Fontisto } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import { colors } from '../../styles';
import styles from './styles';

const WelcomeScreen = () => {
  const welcomeMessageRef = useRef(null);
  const [messageVisible, setMessageVisible] = useState(false);
  async function openBrowser() {
    await WebBrowser.openBrowserAsync('https://www.meifacil.com/duvidas');
  }

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        iterationCount={1}
        onAnimationEnd={() => {
          setMessageVisible(true);
          welcomeMessageRef.current.bounceInUp();
        }}
      >
        <Logo />
      </Animatable.View>
      {messageVisible && (
        <Animatable.View
          ref={welcomeMessageRef}
          iterationCount={1}
          duration={2000}
          style={{ width: '100%', flex: 1 }}
        >
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
        </Animatable.View>
      )}
    </View>
  );
};

export default WelcomeScreen;
