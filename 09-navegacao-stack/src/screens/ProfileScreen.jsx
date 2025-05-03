import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function ProfileScreen(props) {
  
  const { navigation, route } = props;

  // Serve para nevegar entre as telas
  console.log("NAVIGATION => ", navigation);

  // Pegar os parametros e dados da rota
  console.log("ROUTE => ", route);

  return (
    <View>
      <Text>ProfileScreen</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("ConfigScreen")}
      >
        Ir para Tela Config
      </Button>

      <Button
        mode="contained-tonal"
        onPress={() => navigation.goBack()}
      >
        Voltar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
