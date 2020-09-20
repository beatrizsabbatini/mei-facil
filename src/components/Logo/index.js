import React from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/logo.png';

const LogoComponent = () => {
  return (
    <Image
      source={Logo}
      style={{ resizeMode: 'contain', height: 50, width: 200 }}
    />
  );
};

export default LogoComponent;
