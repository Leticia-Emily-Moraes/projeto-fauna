import { Container } from "../escolhaPerfil/style";
import Logo from "../../components/logoPadrao";
import React from "react";
import Radio from "../../components/radioButton/radio";
import { useState } from "react";
import { TxtEP } from "../../components/radioButton/style";
import {Button} from "../../components/button"


function EscolhaPerfil({ navigation }){
    const [opcao, setOpcao] = useState ("")
    return(
        <Container>
            <Logo/>
            <Radio  options={[
            {label: "Profissional", value:"profissional"},
            {label: "ONG", value:"ong"},
            {label: "Pessoal", value:"pessoal"}
            ]} 
            checkedValue = {opcao}
            onChange={setOpcao}
            />

                <Button
                    title="Cadastre-se"
                    onPress={() => navigation.navigate("CadastroDadosUser")}
                />
        </Container>
    );
};

export default EscolhaPerfil;