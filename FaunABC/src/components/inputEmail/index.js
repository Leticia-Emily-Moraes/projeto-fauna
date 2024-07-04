import React, { useState } from "react";
import { Container, Input, Label, TextError } from "./style";

function InputEmail({
    TituloDoInput = "Email:",
    placeholder = "Digite seu email",
    value = "",
    onChangeText = () => {},
    ...props
}) {
    const [email, setEmail] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState("");

    const validateEmail = (email) => {
        if (email.length > 0) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                setMessage("Email inválido");
                return false;
            } else {
                setMessage("");
                return true;
            }
        } else {
            setMessage("Preencha o campo");
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
            {!isValid && <TextError>{message}</TextError>}
        </Container>
    );
}

export default InputEmail;
