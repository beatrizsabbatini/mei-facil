import React from 'react';
import { Image } from 'react-native';
import LogoImage from '../../assets/logo.png';

const Logo = () => {
  return (
    <Image
      source={LogoImage}
      style={{ resizeMode: 'contain', height: 50, width: 200 }}
    />
  );
};

export default Logo;
