import React from 'react';
import { ScrollView } from 'react-native';

import BounceInUpAnimationContainer from '../../components/BounceInUpAnimationContainer';
import NotificationItem from '../../components/NotificationItem';
import { notificationsData } from '../../utils/mocks';

const NotificationsScreen = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{notificationsData.map((item, index) => {
				const indexValue = index + 1
				const itemDelay = indexValue * 100;

				return(
					<BounceInUpAnimationContainer delay={itemDelay} key={item.id.toString()}>
						<NotificationItem item={item}  />
					</BounceInUpAnimationContainer>
				)})}
		</ScrollView>

	)
};

export default NotificationsScreen;
