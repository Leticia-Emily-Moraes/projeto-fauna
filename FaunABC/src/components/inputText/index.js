import React, { useState } from 'react';
import { Container, Input, Label, TextError } from './style';

function InputText({ TituloDoInput = 'Título', placeholder = 'Digite aqui...', value = '', onChangeText = () => {}, ...props }) {
  const [text, setText] = useState(text);
  const [isValid, setIsValid] = useState(true);

  const validateTextInput = (text) => {
    if (text.length > 0) {
      const numberPattern = /[0-9]/;
      return !numberPattern.test(text)
    }else{
      return false
    }
  }

  const handleTextChange = (text) => {
    setText(text)
    setIsValid(validateTextInput(text))
    onChangeText(text)
  }

  return (
    <Container>
      <Label>{TituloDoInput}</Label>
      <Input
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        {...props}
      />
      {!isValid && <TextError>Não pode conter números</TextError>}
    </Container>
  );
}

export default InputText;
