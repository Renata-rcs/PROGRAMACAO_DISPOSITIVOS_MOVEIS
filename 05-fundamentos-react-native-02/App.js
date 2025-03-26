import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import JavascriptComponente from './Componentes/JavascriptComponente';
import Perfil from './Componentes/Perfil';
import ListaComponente from './Componentes/ListaComponente';
import Pessoa from './Componentes/Pessoa';

export default function App() {

  const listaJogadores = [
    {
      nome: "Neymar",
      idade: 33,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAv6eBtFTNeYjdsWRhY0629mBvShc3kc7XMw&s"
    },
    {
      nome: "Neymar",
      idade: 33,
      imagem: "https://www.infomoney.com.br/wp-content/uploads/2025/03/2025-03-17T164854Z_1_LYNXMPEL2G0Q0_RTROPTP_4_MUNDIAL-ARGENTINA-MESSI.jpg?fit=1280%2C929&quality=50&strip=al"
    },
    {
      nome: "Neymar",
      idade: 33,
      imagem: "https://www.infomoney.com.br/wp-content/uploads/2025/03/2025-03-17T164854Z_1_LYNXMPEL2G0Q0_RTROPTP_4_MUNDIAL-ARGENTINA-MESSI.jpg?fit=1280%2C929&quality=50&strip=all"
    },
    {
      nome: "Neymar",
      idade: 33,
      imagem: "https://www.infomoney.com.br/wp-content/uploads/2025/03/2025-03-17T164854Z_1_LYNXMPEL2G0Q0_RTROPTP_4_MUNDIAL-ARGENTINA-MESSI.jpg?fit=1280%2C929&quality=50&strip=all"
    }
  ]
 
  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListaComponente />
      {/* <PrimeiroComponente />
      <JavascriptComponente />

      <Perfil 
        nome="Renata"
        idade={18}
        email="renata@gmail.com"
        telefone="61988888888"
      />
       <Perfil 
        nome="Heitor"
        idade={6}
        email="heitor@gmail.com"
        telefone="61977777777"
      />

      <ListaComponente /> */}
       {/* <Pessoa 
        dados={{
          nome: "Neymar",
          idade: 33,
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAv6eBtFTNeYjdsWRhY0629mBvShc3kc7XMw&s"
        }}
       />
       <Pessoa 
        dados={{
          nome: "Neymar",
          idade: 33,
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAv6eBtFTNeYjdsWRhY0629mBvShc3kc7XMw&s"
        }}
       />
       <Pessoa 
        dados={{
          nome: "Neymar",
          idade: 33,
          imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAv6eBtFTNeYjdsWRhY0629mBvShc3kc7XMw&s"
        }}
       /> */}
    
     {
      listaJogadores.map(
        (jogador) => {
          return (
            <Pessoa 
            dados={jogador}
            />
          )
        }
      )
     }
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
