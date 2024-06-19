import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import PrimeiraPagina from './src/pages/primeiraPagina'

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
        'Inter-Bold': require('./assets/fonts/inter/Inter-Bold.ttf')
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // Ou um componente de carregamento
  }

  return (
    <PrimeiraPagina></PrimeiraPagina>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
