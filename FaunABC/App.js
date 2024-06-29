import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { ProvedorFonte, UseFonte } from "./src/context/fontContext";
import { Container, LoadingContainer } from "./style";
import PrimeiraPagina from "./src/pages/primeiraPagina";
import { ThemeProvider, useTheme } from "./src/context/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <ProvedorFonte>
        <MainApp />
      </ProvedorFonte>
    </ThemeProvider>
  );
}

const MainApp = () => {
  const { fonteCarregada } = UseFonte();
  const { theme } = useTheme();

  if (!fonteCarregada) {
    return <LoadingContainer />;
  }

  return (
    <StyledThemeProvider theme={theme}>
      <Container>
        <PrimeiraPagina />
      </Container>
    </StyledThemeProvider>
  );
};
