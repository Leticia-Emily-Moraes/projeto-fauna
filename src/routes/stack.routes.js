import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PrimeiraPagina from "../pages/primeiraPagina";
import CadastroDadosUser from "../pages/cadastroDadosUser";
import CadastroUser from "../pages/cadastroUser";
import CadastroEnderecoUser from "../pages/cadastroEnderecoUser";
import EscolhaPerfil from "../pages/escolhaPerfil";
const Stack = createStackNavigator();


//Coloquei a página escolha perfil
export function Router() {
    return (
        <Stack.Navigator
            initialRouteName="PrimeiraPagina"
            screenOptions={{ headerShown: false }}
        >

            <Stack.Screen
                name="EscolhaPerfil"
                component={EscolhaPerfil}
        
            />
            <Stack.Screen
                name="PrimeiraPagina"
                component={PrimeiraPagina}
            />
            <Stack.Screen
                name="CadastroUser"
                component={CadastroUser}
            />
            <Stack.Screen
                name="CadastroDadosUser"
                component={CadastroDadosUser}
            />
            <Stack.Screen
                name="CadastroEnderecoUser"
                component={CadastroEnderecoUser}
            />
        </Stack.Navigator>
    );
}