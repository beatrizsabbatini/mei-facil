import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { colors } from '../../styles';
import styles from './styles';

const Button = ({ text, onPress, icon, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled ? true : false}
      style={[
        styles.buttonContainer,
        {
          justifyContent: icon ? 'space-between' : 'center',
          backgroundColor: disabled ? colors.ButtonDisabled : colors.Secondary,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonTitle,
          { color: disabled ? colors.ButtonTextDisabled : colors.Black },
        ]}
      >
        {text}
      </Text>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
