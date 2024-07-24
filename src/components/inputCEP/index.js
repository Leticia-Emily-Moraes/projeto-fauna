import React, { useState, useEffect } from "react";
import { Container, Input, Label, TextError } from "./style";
import getAddress from '../../service/verificaCEP';

function InputCEP({
    TituloDoInput = "CEP: ",
    placeholder = "Digite Seu CEP",
    value = "",
    onChangeText = () => {},
    onAddressFound = () => {},
    ...props
}) {
    const [cep, setCep] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState("");

    const validateCep = async (cep) => {
        if (cep.length === 8 && /^[0-9]+$/.test(cep)) {
            try {
                const addressData = await getAddress(cep);
                setMessage("");
                setIsValid(true);
                onAddressFound(addressData);
                return true;
            } catch (error) {
                setMessage("CEP não encontrado");
                setIsValid(false);
                return false;
            }
        } else {
            setMessage("CEP inválido. Deve conter 8 dígitos numéricos.");
            setIsValid(false);
            return false;
        }
    };

    const handleCepChange = async (cep) => {
        setCep(cep);
        if (cep.length === 8) {
            await validateCep(cep);
        } else {
            setMessage("");
            setIsValid(true);
        }
        onChangeText(cep);
    };

    useEffect(() => {
        setCep(value);
    }, [value]);

    return (
        <Container>
            <Label>{TituloDoInput}</Label>
            <Input
                placeholder={placeholder}
                value={cep}
                onChangeText={handleCepChange}
                keyboardType="numeric"
                {...props}
            />
            {!isValid && <TextError>{message}</TextError>}
        </Container>
    );
}

export default InputCEP;
