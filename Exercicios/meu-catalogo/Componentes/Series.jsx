import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Series(props) {
  const { nome, ano, diretor, temporadas, capa } = props;

  return (
    <View style={styles.container}>
    
      <Text>Nome:{nome}</Text>
      <Text>Ano:{ano}</Text>
      <Text>Diretor:{diretor}</Text>
      <Text>Temporadas:{temporadas}</Text>

      <Image
        source={{
          uri: capa,
        }}
        style={{
          height: 300,
          width: 300,
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

