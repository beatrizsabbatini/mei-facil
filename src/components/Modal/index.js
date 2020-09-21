
import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { colors } from '../../styles';
import styles from './styles';

const ModalComponent = ({ children, modalVisible, setModalVisible }) => {
	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={styles.modalContainer}>
				<TouchableOpacity
					onPress={() => setModalVisible(!modalVisible)}
					style={styles.closeIcon}
				>
					<AntDesign name="close" size={24} color={colors.Secondary} />
				</TouchableOpacity>
				{children}
			</View>
		</Modal>
	);
};

export default ModalComponent;
