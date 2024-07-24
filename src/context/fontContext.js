import React, { createContext, useState, useEffect, useContext } from 'react';
import * as Font from 'expo-font';

const FonteContexto = createContext();

const loadFonts = async () => {
    await Font.loadAsync({
        'Inter-Regular': require('../../assets/fonts/inter/Inter-Regular.ttf'),
        'Inter-Bold': require('../../assets/fonts/inter/Inter-Bold.ttf'),
    });
};

export const ProvedorFonte = ({ children }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        loadFonts().then(() => setFontsLoaded(true));
    }, []);

    return (
        <FonteContexto.Provider value={{ fontsLoaded }}>
            {children}
        </FonteContexto.Provider>
    );
};

export const UseFonte = () => {
    const context = useContext(FonteContexto);
    if (!context) {
        throw new Error('UseFonte deve ser usado dentro de um ProvedorFonte');
    }
    return context;
};
