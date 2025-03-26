import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function JavascriptComponente() {
  const nome = "Renata Carvalho";
  const idade = 21;

  function ChecarMaiorIdade() {
    console.log("Chamou a função ChecarMaiorIdade")
    if (idade >= 18) {
      return "Maior de Idade!";
    } else {
      return "Menor de idade!";
    }
  }

  function alerta() {
    console.log("Chamos a função alerta")
    alert("Clicou no Botão!");
  }

  return (
    <View style={styles.conatiner}>
      <Text>JavascriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40: {idade + 40}</Text>
      <Text>18+ : {ChecarMaiorIdade()}</Text>
      <Button title="Clicar" onPress={alerta}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "yellow",
  },
});
