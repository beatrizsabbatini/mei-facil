import React from 'react';
import * as Animatable from 'react-native-animatable';

const AnimationContainer = ({children, delay}) => {
	return (
		<Animatable.View
		  delay={delay || 0} 	
		  animation="bounceInLeft"
		  duration={3500}
		  iterationCount={1}>{children}
		</Animatable.View>
	)
}

export default AnimationContainer;