import React, { useState } from "react";
import { Container, Input, Label, TextError } from "./style";

function InputEmail({
    TituloDoInput = "Email",
    placeholder = "DIgite seu email",
    value = "",
    onChangeText = () => {},
    ...props
}) {
    const [email, setEmail] = useState(value);
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (email) => {
        if (email.length > 0) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        } else {
            return false;
        }
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValid(validateEmail(text));
        onChangeText(text);
    };

    return (
        <Container>
            <Label>{TituloDoInput}</Label>
            <Input
                placeholder={placeholder}
                value={email}
                onChangeText={handleEmailChange}
                isValid={isValid}
                {...props}
            />
            {!isValid && <TextError>Email inválido</TextError>}
        </Container>
    );
}

export default InputEmail;
