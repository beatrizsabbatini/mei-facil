
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import BasicContainer from '../../../../components/BasicContainer';
import BasicTitle from '../../../../components/BasicTitle';
import { metrics } from '../../../../styles';
import { blogData } from '../../../../utils/mocks';
import styles from './styles';

const BlogSection = () => {
  async function openBrowser(url) {
    await WebBrowser.openBrowserAsync(url);
  }

  return (
    <View style={styles.sectionContainer}>
      <BasicTitle
        title="Blog da MEI Fácil"
        customStyle={{ marginLeft: metrics.doubleBaseMargin }}
      />
      <FlatList
        data={blogData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => openBrowser(item.url)}>
              <BasicContainer
                style={[
                  styles.container,
                  index === 0 && { marginLeft: metrics.doubleBaseMargin },
                ]}
              >
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
