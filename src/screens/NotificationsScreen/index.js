import React from 'react';
import { ScrollView } from 'react-native';
import NotificationItem from '../../components/NotificationItem';
import { notificationsData } from '../../utils/mocks';

const NotificationsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {notificationsData.map((item) => (
        <NotificationItem item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default NotificationsScreen;
