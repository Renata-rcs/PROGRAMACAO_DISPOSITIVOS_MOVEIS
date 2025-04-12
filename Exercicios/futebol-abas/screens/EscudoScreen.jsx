import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import {  Title } from "react-native-paper";

export default function EscudoScreen() {
  const time = {
    nome: "Flamengo",
    escudo:
      "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto} >{time.nome}</Text>
      <Image 
      source={{ uri: time.escudo }}  
      style={{width: 300, height: 400}}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
      },
      texto: {
        fontSize: 40,
        fontWeight:"bold",
        padding: 20
      }
});
