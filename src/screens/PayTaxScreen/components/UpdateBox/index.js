import React from 'react';
import { View, Text } from 'react-native';

import { fonts } from '../../../../styles';
import styles from './styles';

const UpdateBox = () => {
	return <View style={styles.container}>
		<Text style={styles.title}>Atualize seu DAS!</Text>
		<Text style={styles.subtitle}>
			Você já pagou algum DAS abaixo e ele não consta como  
			<Text  style={[styles.title, {fontSize: fonts.regular}]}>{' '}pago
			</Text>? Clique para atualizar o seu status!</Text>
		<Text style={styles.message}>Não pague novamente, a confirmação pode
		levaraté 15 dias da data de pagamento</Text>
	</View>
}

export default UpdateBox;