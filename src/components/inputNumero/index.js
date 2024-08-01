import React, { useState, useEffect } from "react";
import { Container, Input, Label, TextError } from "./style";

function InputNumero({
    TituloDoInput = "Título",
    placeholder = "Digite aqui...",
    value = '',
    onChangeNumber = () => {},
    ...props
}) {
    const [numero, setNumero] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState("");

    const validarNumero = (num) => {
        if (num.length > 0) {
            const letrasPattern = /[a-zA-Z]/;
            if (letrasPattern.test(num)) {
                setMessage("Não pode ter letras");
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

    const handleNumeroChange = (num) => {
        setNumero(num);
        setIsValid(validarNumero(num));
        onChangeNumber(num);
    };

    useEffect(() => {
        setNumero(value);
    }, [value]);

    return (
        <Container>
            <Label>{TituloDoInput}</Label>
            <Input
                placeholder={placeholder}
                value={numero}
                onChangeText={handleNumeroChange}
                keyboardType="numeric"
                isValid={isValid}
                {...props}
            />
            {!isValid && <TextError>{message}</TextError>}
        </Container>
    );
}

export default InputNumero;
