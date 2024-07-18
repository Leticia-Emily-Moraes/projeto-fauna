import React, { useState, useEffect } from 'react';
import { Container, Input, Label, TextError } from './style';

function InputText({
  TituloDoInput = 'Título',
  placeholder = 'Digite aqui...',
  value = '',
  onChangeText = () => {},
  ...props
}) {
  const [text, setText] = useState(value);
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const validateTextInput = (text) => {
    if (text.length > 0) {
      const numberPattern = /[0-9]/;
      if (numberPattern.test(text)) {
        setMessage("Não pode ter números");
        return false;
      } else {
        setMessage('');
        return true;
      }
    } else {
      setMessage("Preencha o campo");
      return false;
    }
  };

  const handleTextChange = (text) => {
    setText(text);
    setIsValid(validateTextInput(text));
    onChangeText(text);
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <Container>
      <Label>{TituloDoInput}</Label>
      <Input
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
        {...props}
      />
      {!isValid && <TextError>{message}</TextError>}
    </Container>
  );
}

export default InputText;
