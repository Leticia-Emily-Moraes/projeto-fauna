import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PrimeiraPagina from "../pages/primeiraPagina";
import CadastroDadosUser from "../pages/cadastroDadosUser";
import CadastroUser from "../pages/cadastroUser";
import CadastroEnderecoUser from "../pages/cadastroEnderecoUser";
import CadastroDadosPessoaisUser from "../pages/cadastroDadosPessoaisUser";

const Stack = createStackNavigator();

export function Router() {
    return (
        <Stack.Navigator
            initialRouteName="CadastroDadosPessoaisUser"
            screenOptions={{ headerShown: false }}
        >
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
            <Stack.Screen
                name="CadastroDadosPessoaisUser"
                component={CadastroDadosPessoaisUser}
            />
        </Stack.Navigator>
    );
}