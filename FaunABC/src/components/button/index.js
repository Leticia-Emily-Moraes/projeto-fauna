import React from 'react';
import { ButtonPrincipal, ButtonText } from './style';

function Button({ title }) {
  return (
    <ButtonPrincipal>
      <ButtonText>{title}</ButtonText>
    </ButtonPrincipal>
  );
}

export default Button;
