import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { statuses } from '../../utils/constants';
import styles from './styles';

const TaxContainer = ({ status, date, monthAndYear, lastItem }) => {
  return (
    <>
      <TouchableOpacity style={styles.taxContainer} onPress={() => {}}>
        <View>
          <Text style={styles.title}>{monthAndYear}</Text>
          <Text style={styles.subtitle}>Vencimento {date}</Text>
        </View>
        <View
          style={[
            styles.statusContainer,
            status == statuses.PAID
              ? styles.paid
              : status == statuses.OPEN
              ? styles.open
              : styles.commonStyles,
          ]}
        >
          <Text style={styles.commonStyles}>{status}</Text>
        </View>
      </TouchableOpacity>
      {!lastItem && <View style={styles.separator} />}
    </>
  );
};

export default TaxContainer;
