import React from "react";
import "react-native-gesture-handler";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { ProvedorFonte, UseFonte } from "./src/context/fontContext";
import { Container, LoadingContainer } from "./style";
import { ThemeProvider, useTheme } from "./src/context/themeContext";
import { Router } from "./src/routes/";

const MainApp = () => {
    const { fonteCarregada } = UseFonte();
    const { theme } = useTheme();

    if (!fonteCarregada) {
        return <LoadingContainer />;
    }

    return (
        <StyledThemeProvider theme={theme}>
            <Container>
                <Router/>
            </Container>
        </StyledThemeProvider>
    );
};

export default function App() {
    return (
        <ThemeProvider>
            <ProvedorFonte>
                <MainApp />
            </ProvedorFonte>
        </ThemeProvider>
    );
}
