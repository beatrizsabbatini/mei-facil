import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const BasicTitle = ({ title, customStyle }) => {
  return <Text style={[styles.title, customStyle]}>{title}</Text>;
};

export default BasicTitle;
