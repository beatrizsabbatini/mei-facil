import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import RepublicaFederativa from '../../../../assets/republica-federativa.png';
import BasicContainer from '../../../../components/BasicContainer';
import styles from './styles';

const DocumentPDFBox = ({ documentType, documentName }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <BasicContainer style={{ padding: 0 }}>
        <View style={styles.containerTop}>
          <View>
            <Text style={styles.title}>{documentType}</Text>
            <Text style={styles.subtitle}>{documentName}</Text>
          </View>
          <Image source={RepublicaFederativa} style={styles.image} />
        </View>
        <View style={styles.greyLine} />
        <TouchableOpacity>
          <Text style={styles.seePDF}>VER PDF</Text>
        </TouchableOpacity>
      </BasicContainer>
    </TouchableOpacity>
  );
};

export default DocumentPDFBox;
