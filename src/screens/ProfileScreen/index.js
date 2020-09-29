import React, { useEffect } from 'react';
import { AsyncStorage, ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';

import Logout from '../../assets/logout.png';
import { authenticationReset } from '../../store/ducks/authentication';
import { colors } from '../../styles';
import { profileButtonsData } from '../../utils/mocks';
import ButtonsListItem from './components/ButtonsListItem';
import buttonStyles from './components/ButtonsListItem/styles';
import DocumentPDFBox from './components/DocumentPDFBox';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	async function handleLogout(){
		await AsyncStorage.removeItem('token');
		dispatch(authenticationReset());
		navigation.navigate('WelcomeScreen');
	}


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

			<TouchableOpacity
				style={buttonStyles.container}
				onPress={() => handleLogout()}
			>
				<View style={buttonStyles.containerLeft}>
					<Image style={buttonStyles.icon} source={Logout} />
					<Text style={buttonStyles.buttonTitle}>Sair do Aplicativo</Text>
				</View>
				<FontAwesome
					name="long-arrow-right"
					size={24}
					color={colors.DarkerYellow}
				/>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default ProfileScreen;
