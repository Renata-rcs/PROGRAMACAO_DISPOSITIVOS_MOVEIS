import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

export default function Filmes(props) {
  const { nome, ano, diretor, tipo, capa } = props;

  return (
    <View style={styles.container}>
      <Text>Nome:{nome}</Text>
      <Text>Ano:{ano}</Text>
      <Text>Diretor:{diretor}</Text>
      <Text>Tipo:{tipo}</Text>

      <Image
        source={{
          uri: capa,
        }}
        style={{
          height: 300,
          width: 300,
          padding: 10
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 5

    }
});
