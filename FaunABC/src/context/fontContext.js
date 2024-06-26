import React, { createContext, useState, useEffect, useContext } from "react";
import * as Font from 'expo-font';

const FonteContexto = createContext();

export const ProvedorFonte = ({ children }) => {
    const [fonteCarregada, setFonteCarregada] = useState(false);

    useEffect(() => {
        const carregarFontes = async () => {
            await Font.loadAsync({
                'Inter-Regular': require('../../assets/fonts/inter/Inter-Regular.ttf'),
                'Inter-Bold': require('../../assets/fonts/inter/Inter-Bold.ttf'),
            });
            setFonteCarregada(true);
        };
        carregarFontes();
    }, []);

    return (
        <FonteContexto.Provider value={{ fonteCarregada }}>
            {children}
        </FonteContexto.Provider>
    );
};

export const UseFonte = () => {
    return useContext(FonteContexto);
}
