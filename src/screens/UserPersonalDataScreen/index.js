import React, { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import InfoContainer from '../../components/InfoContainer';
import { userRequest } from '../../store/ducks/user';
import { colors } from '../../styles';
import styles from './styles';

const UserPersonalDataScreen = () => {
	const dispatch = useDispatch();
	const userData = useSelector(state => state.user.data);
	const loading = useSelector(state => state.user.loading);

	useEffect(() => {
		dispatch(userRequest())
	}, [])

	return (
		<ScrollView contentContainerStyle={styles.background} showsVerticalScrollIndicator={false}>
			{loading == false && userData !== undefined ? (
				<>
					<InfoContainer title="Nome completo" value={userData.name} />
					<InfoContainer title="Telefone" value={userData.phoneNumber} />
					<InfoContainer title="E-mail" value={userData.email} />
					<InfoContainer title="Data de Nascimento" value={userData.dateOfBirth} />
					<InfoContainer title="RG" value={userData.rg} />
					<InfoContainer title="CEP" value={userData.adress.zipCode} />
					<InfoContainer title="Logradouro" value={userData.adress.publicPlace} />
					<InfoContainer title="Número" value={userData.adress.number} />
					<InfoContainer title="Complemento" value={userData.adress.complement} />
					<InfoContainer title="Bairro" value={userData.adress.neighborhood} />
					<View style={styles.stateAndCity}>
						<InfoContainer title="Estado" value={userData.adress.state} />
						<InfoContainer title="Cidade" value={userData.adress.city} style={{paddingLeft: 90}} />
					</View>
				</>
			) : (
				<ActivityIndicator size="large" color={colors.Primary} style={{flex: 1, alignSelf: 'center'}} />
			)}
		
			
		</ScrollView>
	)
}

export default UserPersonalDataScreen;