import React from 'react';
import { ButtonPrincipal, ButtonText } from './style';

function Button({ title, onPress }) {
  return (
    <ButtonPrincipal onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonPrincipal>
  );
}

export default Button;
