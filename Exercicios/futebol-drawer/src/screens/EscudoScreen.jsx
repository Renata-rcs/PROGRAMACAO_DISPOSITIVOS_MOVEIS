import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
      <Text style={styles.texto}>{time.nome}</Text>
      <Text>Fundação: {time.fundacao}</Text>
      <Text>Estádio: {time.estadio}</Text>
      <Text>Mascote: {time.mascote}</Text>
      <Text>Cores: {time.cores.join(' e ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20
  },
  escudo: {
    width: 150,
    height: 150,
    marginTop: 20
  }
});
