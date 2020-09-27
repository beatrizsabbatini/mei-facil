import React, { useEffect } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import InfoContainer from '../../components/InfoContainer';
import { companyRequest } from '../../store/ducks/company';
import { colors } from '../../styles';
import { formatCurrency } from '../../utils/functions';
import styles from './styles';

const CompanyDataScreen = () => {
	const dispatch = useDispatch();
	const companyData = useSelector(state => state.company.data);
	const loading = useSelector(state => state.company.loading);

	useEffect(() => {
		dispatch(companyRequest())
	}, [])

	return (
		<ScrollView contentContainerStyle={styles.background} showsVerticalScrollIndicator={false}>
			{loading == false && companyData !== undefined ? (
				<>
					<InfoContainer title="CNPJ/MEI" value={companyData.mei} />
					<InfoContainer title="Data da abertura" value={companyData.openingDate} />
					<InfoContainer title="Nome Empresarial" value={companyData.companyName} />
					<InfoContainer title="Nome Fantasia" value={companyData.tradingName} />
					<InfoContainer title="Natureza Jurídica" value={companyData.legalNature} />
					<InfoContainer title="Atividade Principal" value={companyData.mainActivity} />
					<View style={styles.rowContainer}>
						<InfoContainer title="Situação" value={companyData.isActive === true ? "Ativo" : "Inativo"} />
						<InfoContainer 
							title="Capital Social" 
							value={formatCurrency(companyData.shareCapital)}
							style={{paddingLeft: 90}}
						/>
					</View>
					<InfoContainer title="CEP" value={companyData.adress.zipCode} />
					<InfoContainer title="Logradouro" value={companyData.adress.publicPlace} />
					<InfoContainer title="Número" value={companyData.adress.number} />
					<InfoContainer title="Complemento" value={companyData.adress.complement} />
					<InfoContainer title="Bairro" value={companyData.adress.neighborhood} />
					<View style={styles.rowContainer}>
						<InfoContainer title="Estado" value={companyData.adress.state} />
						<InfoContainer 
							title="Cidade" 
							value={companyData.adress.city}
							style={{paddingLeft: 90}}
						/>
					</View>
				</>
			) : (
				<ActivityIndicator size="large" color={colors.Primary} style={{flex: 1, alignSelf: 'center'}} />
			)}
		
			
		</ScrollView>
	)
}

export default CompanyDataScreen;