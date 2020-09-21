import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Fontisto } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Modal from '../../components/Modal';
import { colors } from '../../styles';
import ModalCPFContent from './components/ModalCPFContent';
import ModalPasswordContent from './components/ModalPasswordContent';
import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
	const welcomeMessageRef = useRef(null);
	const [messageVisible, setMessageVisible] = useState(false);
	const [modalCPFOpen, setModalCPFOpen] = useState(false);
	const [modalPasswordOpen, setModalPasswordOpen] = useState(false);

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
							onPress={() => setModalCPFOpen(true)}
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
					<Modal modalVisible={modalCPFOpen} setModalVisible={setModalCPFOpen}>
						<ModalCPFContent setPasswordModalVisible={setModalPasswordOpen} />
					</Modal>
					<Modal
						modalVisible={modalPasswordOpen}
						setModalVisible={setModalPasswordOpen}
					>
						<ModalPasswordContent
							navigation={navigation}
							setCPFModalVisible={setModalCPFOpen}
							setPasswordModalVisible={setModalPasswordOpen}
						/>
					</Modal>
				</Animatable.View>
			)}
		</View>
	);
};

export default WelcomeScreen;
