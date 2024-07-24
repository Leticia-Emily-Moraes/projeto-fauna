import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/routes/stack.routes';
import 'react-native-gesture-handler';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { ProvedorFonte, UseFonte } from './src/context/fontContext';
import { ThemeProvider, useTheme } from './src/context/themeContext';
import { LoadingContainer } from './style';

function MainApp() {
    const { fontsLoaded } = UseFonte();
    const { theme } = useTheme();

    if (!fontsLoaded) {
        return <LoadingContainer />;
    }

    return (
        <StyledThemeProvider theme={theme}>
            <NavigationContainer>
                <Router />
            </NavigationContainer>
        </StyledThemeProvider>
    );
}

function App() {
    return (
        <ThemeProvider>
            <ProvedorFonte>
                <MainApp />
            </ProvedorFonte>
        </ThemeProvider>
    );
}

export default App;
