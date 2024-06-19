import React from "react";
import { Container, ContainerButtons, ContainerEntrarCom, ContainerButtonsEntrarCom, TextoNormal } from "./style";
import Button from "../../components/button";
import Logo from "../../components/logoPadrao";
import Icon from "../../components/iconFolha";
import ButtonRedondo from "../../components/buttonsRedondos";
import apple from "../../../assets/imgs/apple.png"
import facebook from "../../../assets/imgs/facebook.png"
import google from "../../../assets/imgs/google.png"

function PrimeiraPagina() {
  return (
    <Container>
      <Logo />
      <ContainerButtons>
        <Button title="Cadastre-se" />
        <Button title="Entrar" />
        <ContainerEntrarCom>
          <TextoNormal>Entrar com:</TextoNormal>
          <ContainerButtonsEntrarCom>
            <ButtonRedondo img={facebook}></ButtonRedondo>
            <ButtonRedondo img={google}></ButtonRedondo>
            <ButtonRedondo img={apple}></ButtonRedondo>
          </ContainerButtonsEntrarCom>
        </ContainerEntrarCom>
        <Button title="Sem Logar" />
      </ContainerButtons>
      <Icon />
    </Container>
  );
}

export default PrimeiraPagina;
