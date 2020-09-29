import React, { useContext, useEffect, useRef, useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { Feather, Fontisto } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Button from '../../../../components/Button';
import { UserContext } from '../../../../contexts/UserContext';
import { colors } from '../../../../styles';
import styles from '../styles';

const ModalCPFContent = ({ setPasswordModalVisible }) => {
	const [cpf, setCpf] = useState('');
	const [isValid, setIsValid] = useState(false);
	const cpfRef = useRef(null);

	const { setUserCpf } = useContext(UserContext);

	useEffect(() => {
		const value = cpfRef.current.isValid();
		if (value === true) {
			setIsValid(true);
			Keyboard.dismiss();
		} else {
			setIsValid(false);
		}
	}, [cpf]);

	async function openBrowser() {
		await WebBrowser.openBrowserAsync('https://www.meifacil.com/termos-de-uso');
	}

	return (
		<View style={styles.contentContainer}>
			<Text style={styles.modalTitle}>
        Digite seu CPF{'\n'}para acessar o App
			</Text>
			<View style={styles.cpfContainer}>
				<Text style={styles.cpfText}>CPF</Text>
				<View style={styles.inputContainer}>
					<TextInputMask
						ref={cpfRef}
						style={styles.input}
						keyboardType="numeric"
						placeholder="Números"
						type="cpf"
						value={cpf}
						onChangeText={(text) => {
							setCpf(text);
						}}
					/>
					{cpf.length > 0 && (
						<Feather
							name={isValid ? 'check' : 'x'}
							size={24}
							color={isValid ? colors.Green : colors.Red}
						/>
					)}
				</View>
				<View style={styles.yellowLine} />
				<Text style={styles.agreeToTermsFirstLine}>
          Ao continuar você está de acordo com os{'\n'}
					<Text
						onPress={() => openBrowser()}
						style={styles.agreeToTermsSecondLine}
					>
            Termos e condições de uso
					</Text>
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					onPress={() => {
						setUserCpf(cpf);
						setPasswordModalVisible(true)}}
					disabled={!isValid}
					text="Continuar"
					icon={
						<Fontisto name="arrow-right-l" size={24} color={colors.Black} />
					}
				/>
			</View>
		</View>
	);
};

export default ModalCPFContent;
