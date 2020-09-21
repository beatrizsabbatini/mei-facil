import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import BasicContainer from '../../../../components/BasicContainer';
import BasicTitle from '../../../../components/BasicTitle';
import TaxContainer from '../../../../components/TaxContainer';
import { statuses } from '../../../../utils/constants';
import styles from './styles';

const DASSection = () => {
  return (
    <View style={styles.container}>
      <BasicTitle title="Imposto DAS MEI" />
      <BasicContainer style={{ padding: 0 }}>
        <TaxContainer
          status={statuses.PAID}
          date="21/09/2020"
          monthAndYear="Agosto 2020"
        />
        <TaxContainer
          status={statuses.OPEN}
          date="20/10/2020"
          monthAndYear="Setembro 2020"
          lastItem
        />
        <TouchableOpacity>
          <Text style={styles.seeCompleteList}>Ver lista completa</Text>
        </TouchableOpacity>
      </BasicContainer>
    </View>
  );
};

export default DASSection;
