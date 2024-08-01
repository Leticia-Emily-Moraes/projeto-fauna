import React, { useState } from "react";
import {
    Container,
    ContainerInputs,
    TextoNormal,
    TextoTitulo,
    ContainerEntrarCom,
    ContainerButtonsEntrarCom,
    TextError
} from "./style";
import Button from "../../components/button";
import InputText from "../../components/inputText";
import InputEmail from "../../components/inputEmail";
import InputSenha from "../../components/inputSenha";
import Icon from "../../components/iconFolha";
import ButtonRedondo from "../../components/buttonsRedondos";
import apple from "../../../assets/imgs/apple.png";
import facebook from "../../../assets/imgs/facebook.png";
import google from "../../../assets/imgs/google.png";

function CadastroDadosUser({ navigation }) {
    const [pNome, setPNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [isSenhaValida, setIsSenhaValida] = useState(true);
    const [senhaErrorMessage, setSenhaErrorMessage] = useState("");
    const [errorMensagem, setErrorMensagem] = useState("");

    const handleConfirmarSenhaChange = (text) => {
        setConfirmaSenha(text);
        if (text !== senha) {
            setIsSenhaValida(false);
            setSenhaErrorMessage("As senhas não coincidem");
        } else {
            setIsSenhaValida(true);
            setSenhaErrorMessage("");
        }
    };

    const verificandoPreenchimento = () => {
        if(!pNome || !sobrenome || !email || !senha || !confirmaSenha){
            setErrorMensagem("Todos os campos devem estar preenchidos");
            return;
        }
        if(isSenhaValida){
            navigation.navigate("CadastroEnderecoUser");
        }
    }

    return (
        <Container>
            <TextoTitulo>Cadastre-se</TextoTitulo>
            {errorMensagem && <TextError>{errorMensagem}</TextError>}
            <ContainerInputs>
                <InputText
                    TituloDoInput="Primeiro nome:"
                    value={pNome}
                    onChangeText={setPNome}
                    placeholder="Primeiro nome"
                />
                <InputText
                    TituloDoInput="Sobrenome:"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                    placeholder="Sobrenome"
                />
                <InputEmail
                    value={email}
                    onChangeText={setEmail}
                />
                <InputSenha
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <InputSenha
                    TituloDoInput="Confirme a senha:"
                    value={confirmaSenha}
                    onChangeText={handleConfirmarSenhaChange}
                    placeholder="Confirmar senha"
                    secureTextEntry={true}
                />
                {!isSenhaValida && <TextError>{senhaErrorMessage}</TextError>}
            </ContainerInputs>
            <Button title="Cadastrar" onPress={verificandoPreenchimento}/>
            <ContainerEntrarCom>
                <TextoNormal>Cadastrar com:</TextoNormal>
                <ContainerButtonsEntrarCom>
                    <ButtonRedondo img={facebook} />
                    <ButtonRedondo img={google} />
                    <ButtonRedondo img={apple} />
                </ContainerButtonsEntrarCom>
            </ContainerEntrarCom>
            <Icon />
        </Container>
    );
}

export default CadastroDadosUser;
