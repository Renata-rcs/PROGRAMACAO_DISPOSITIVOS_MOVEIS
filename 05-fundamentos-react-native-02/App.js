import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PrimeiroComponente from "./Componentes/PrimeiroComponente";
import JavascriptComponente from "./Componentes/JavascriptComponente";
import Perfil from "./Componentes/Perfil";
import ListaComponente from "./Componentes/ListaComponente";
import Pessoa from "./Componentes/Pessoa";
import Atleta from "./Componentes/Atleta";

export default function App() {
  const listaJogadores = [
    {
      nome: "Neymar",
      idade: 33,
      imagem:
        "https://i.pinimg.com/236x/65/92/d2/6592d22f05d29398784337cd02a37e26.jpg",
    },
    {
      nome: "Cristiano Ronaldo",
      idade: 40,
      imagem:
        "https://i.pinimg.com/474x/e2/07/cc/e207cc58c891798d5ff308b38ebc59cc.jpg",
    },
    {
      nome: "Lebron James",
      idade: 40,
      imagem:
        "https://i.pinimg.com/236x/6a/ae/f7/6aaef74808fdfbe4b25c41699fba6d81.jpg",
    },
    {
      nome: "Falcão",
      idade: 40,
      imagem:
        "https://i.pinimg.com/236x/2a/35/4f/2a354f4de93337261a885fee54e55118.jpg",
    },
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <ListaComponente /> */}
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
        {/*     
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
     } */}

        {listaJogadores.map((jogador) => {
          return (
            <Atleta
              nome={jogador.nome}
              idade={jogador.idade}
              imagem={jogador.imagem}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
