
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import styles from './styles';

const PayTaxBox = () => {
	async function openBrowser() {
		await WebBrowser.openBrowserAsync(
			'https://conteudo.meifacil.com/novidades/dasn/notificacao-dasn-atraso.html'
		);
	}

	return (
		<TouchableOpacity style={styles.container} onPress={() => openBrowser()}>
			<Text style={styles.message}>Não entreguei a DASN. e agora?</Text>
			<Text style={styles.buttonText}>Saiba mais</Text>
		</TouchableOpacity>
	);
};

export default PayTaxBox;
