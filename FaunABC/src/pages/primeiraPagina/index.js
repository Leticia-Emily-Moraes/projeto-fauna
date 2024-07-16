import React from "react";
import {
    Container,
    ContainerButtons,
    ContainerEntrarCom,
    ContainerButtonsEntrarCom,
    TextoNormal,
} from "./style";
import Button from "../../components/button";
import Logo from "../../components/logoPadrao";
import Icon from "../../components/iconFolha";
import ButtonRedondo from "../../components/buttonsRedondos";
import apple from "../../../assets/imgs/apple.png";
import facebook from "../../../assets/imgs/facebook.png";
import google from "../../../assets/imgs/google.png";
import ToggleTheme from "../../components/toggleTheme";

function PrimeiraPagina({ navigation }) {
    return (
        <Container>
            <ToggleTheme />
            <Logo />
            <ContainerButtons>
                <Button
                    title="Cadastre-se"
                    onPress={() => navigation.navigate("CadastroUser")}
                />
                <Button title="Entrar" />
                <ContainerEntrarCom>
                    <TextoNormal>Entrar com:</TextoNormal>
                    <ContainerButtonsEntrarCom>
                        <ButtonRedondo img={facebook} />
                        <ButtonRedondo img={google} />
                        <ButtonRedondo img={apple} />
                    </ContainerButtonsEntrarCom>
                </ContainerEntrarCom>
                <Button title="Sem Logar" />
            </ContainerButtons>
            <Icon />
        </Container>
    );
}

export default PrimeiraPagina;
