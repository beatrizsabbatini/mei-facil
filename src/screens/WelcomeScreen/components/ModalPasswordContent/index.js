import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Fontisto, Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import Button from '../../../../components/Button';
import { colors } from '../../../../styles';
import styles from '../styles';

const ModalPasswordContent = ({
	setPasswordModalVisible,
	setCPFModalVisible,
	navigation,
}) => {
	const [password, setPassword] = useState('');
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<View style={styles.contentContainer}>
			<Text style={styles.modalTitle}>Agora, digite sua senha</Text>
			<View style={styles.cpfContainer}>
				<Text style={styles.cpfText}>Senha</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						keyboardType="default"
						secureTextEntry={!passwordVisible}
						placeholder="Digite sua senha"
						value={password}
						onChangeText={(text) => {
							setPassword(text);
						}}
					/>
					<TouchableOpacity
						onPress={() => setPasswordVisible(!passwordVisible)}
					>
						<Ionicons
							name={passwordVisible ? 'md-eye' : 'md-eye-off'}
							size={24}
							color={colors.Secondary}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.yellowLine} />
				<TouchableOpacity
					onPress={() => {}}
					style={styles.forgotPassword}
				>
					<Text style={[styles.agreeToTermsSecondLine]}>Esqueci a senha</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					onPress={() => {
						setPasswordModalVisible(false);
						setCPFModalVisible(false);
						navigation.navigate('Home');
					}}
					disabled={password.length < 3}
					text="Acessar"
					icon={
						<Fontisto name="arrow-right-l" size={24} color={colors.Black} />
					}
				/>
			</View>
		</View>
	);
};

export default ModalPasswordContent;
