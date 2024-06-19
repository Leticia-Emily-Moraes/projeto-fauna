import React from 'react';
import LogoImg from '../../../assets/imgs/Logo.png';
import { LogoImagem } from './style';

function Logo() {
  return (
    <LogoImagem 
    resizeMode="contain"
    source={LogoImg}/>
  );
}

export default Logo;
