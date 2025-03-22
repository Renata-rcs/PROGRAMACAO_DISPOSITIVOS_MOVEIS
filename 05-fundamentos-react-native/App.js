// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';


// Função que representa o componente
export default function App() {
// Lógica da aplicação



// Retorno dessa função com o template do que vai ser renderizadi na tela (JSX)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente />

      <SegundoComponente />

      <TerceiroComponente />

      <JavascriptComponente />

      <Perfil 
        nome="Heitor Davi"
        idade={6}
        email="Heitor@h.com"
      />
      <Perfil 
        nome="Renata Souza"
        idade={6}
        email="renata@r.com"
      />
      <Perfil 
        nome="Marcella"
        idade={6}
        email="marcella@m.com"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
