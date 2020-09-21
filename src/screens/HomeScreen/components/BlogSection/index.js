import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import BasicContainer from '../../../../components/BasicContainer';
import BasicTitle from '../../../../components/BasicTitle';
import { blogData } from '../../../../utils/mocks';
import styles from './styles';

const BlogSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <BasicTitle title="Blog da MEI Fácil" />
      <FlatList
        data={blogData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <BasicContainer key={item.id.toString()} style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
              </BasicContainer>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default BlogSection;