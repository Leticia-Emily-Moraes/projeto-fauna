import React from "react";
import {
    Container,
} from "./style";
import Button from "../../components/button";

function CadastroUser({ navigation }) {
    return (
        <Container>
                <Button
                    title="Cadastre-se"
                    onPress={() => navigation.navigate("PrimeiraPagina")}
                />
        </Container>
    );
}

export default CadastroUser;
