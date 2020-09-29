import React, { useState, useContext, useEffect } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Fontisto, Ionicons } from '@expo/vector-icons';

import Button from '../../../../components/Button';
import { UserContext } from '../../../../contexts/UserContext';
import { authenticationRequest } from '../../../../store/ducks/authentication';
import { colors } from '../../../../styles';
import styles from '../styles';

const ModalPasswordContent = ({
	setPasswordModalVisible,
	setCPFModalVisible,
}) => {
	const [password, setPassword] = useState('');
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [showError, setShowError] = useState(false);
	const dispatch = useDispatch();
	const token = useSelector(state => state.authentication.token)
	const errors = useSelector(state => state.authentication.errors)
	const {setToken} = useContext(UserContext)

	useEffect(() => {
		setShowError(false)
		if (token !== undefined){
			setPasswordModalVisible(false);
			setCPFModalVisible(false);
		
			console.log('TOKEN No modal:', token)

			setToken(token)
		}
	}, [token])

	useEffect(() => {
		if (errors && showError){
			Alert.alert(errors)
		}
	}, [errors])

	const { userCpf } = useContext(UserContext);

	 function handleSubmit(){

		 dispatch(authenticationRequest({
			 cpf: userCpf,
			 password: password, 
		}));

		setShowError(true)

	}

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
					onPress={handleSubmit}
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
