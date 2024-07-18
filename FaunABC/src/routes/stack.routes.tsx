import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PrimeiraPagina from "../pages/primeiraPagina";
import CadastroUser from "../pages/cadastroDadosUser";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="primeira pagina"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="primeira pagina"
                component={PrimeiraPagina}
            />
            <Stack.Screen
                name="cadastro user"
                component={CadastroUser}
            />
        </Stack.Navigator>
    );
}
