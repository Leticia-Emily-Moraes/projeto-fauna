import React, { useState } from "react";
import {
    Container,
    ContainerInputs,
    TextoNormal,
    TextoTitulo,
    TextError
} from "./style";
import InputCEP from "../../components/inputCEP";


function CadastroEnderecoUser({ navigation }) {
    const [cep, setCep] = useState("");
    return (
        <Container>
            <TextoTitulo>Cadastre seu endereço</TextoTitulo>
            <InputCEP
                value={cep}
                onChangeText={setCep}
            />
        </Container>
    );
}

export default CadastroEnderecoUser;
