import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ text, onPress, icon }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { justifyContent: icon ? 'space-between' : 'center' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonTitle}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
