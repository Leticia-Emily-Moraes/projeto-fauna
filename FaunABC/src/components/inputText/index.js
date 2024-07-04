import React from 'react';
import { Container, Input, Label } from './style';

function Input({ TituloDoInput = 'Título', placeholder = 'Digite aqui...', value = '', onChangeText = () => {}, ...props }) {
  return (
    <Container>
      <Label>{TituloDoInput}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </Container>
  );
}

export default Input;
