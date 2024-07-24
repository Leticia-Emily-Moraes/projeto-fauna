import React, { useState } from "react";
import { Container, Input, Label, TextError } from "./style";

function InputSenha({
    TituloDoInput = "Senha:",
    placeholder = "Digite uma senha",
    value = "",
    onChangeText = () => {},
    ...props
}) {
    const [senha, setSenha] = useState(value);
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState("");

    const validatesenha = (senha) => {
        if (senha.length < 8) {
            setMessage("Mínimo 8 caracteres");
            return false;
        } else if (!/[0-9]/.test(senha)) {
            setMessage("Precisa de pelo menos um número");
            return false;
        } else if (!/[A-Z]/.test(senha)) {
            setMessage("Precisa de pelo menos uma letra maiúscula");
            return false;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
            setMessage("Precisa de pelo menos um caractere especial");
            return false;
        } else {
            setMessage("");
            return true;
        }
    };

    const handleSenhaChange = (senha) => {
        setSenha(senha);
        setIsValid(validatesenha(senha));
        onChangeText(senha);
    };

    return (
        <Container>
            <Label>{TituloDoInput}</Label>
            <Input
                placeholder={placeholder}
                value={senha}
                onChangeText={handleSenhaChange}
                isValid={isValid}
                {...props}
            />
            {!isValid && <TextError>{message}</TextError>}
        </Container>
    );
}

export default InputSenha;
