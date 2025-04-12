import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import React from "react";
import { Text, Card, Title } from "react-native-paper";

export default function TitulosScreen() {
  const titulos = [
    {
      nome: "Campeonato Brasileiro",
      anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
    },
    {
      nome: "Copa Libertadores da América",
      anos: [1981, 2019, 2022],
    },
    {
      nome: "Copa do Brasil",
      anos: [1990, 2006, 2013, 2022, 2024],
    },
    {
      nome: "Supercopa do Brasil",
      anos: [2020, 2021, 2025],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: 'center'}}>Títulos</Text>
      <FlatList
        style={{ width: "100%" }}
        data={titulos}
        renderItem={({ item }) => (
          <Card style={{ width: "90%", margin: 20 }}>
            <Title style={styles.texto}>{item.nome}</Title>
            <Card.Content >
              {/* <Text>{item.anos.join(', ')}</Text> */}

              {item.anos.map((ano, index) => (
                <Text style={{ textAlign: 'center', padding: 5}} key={index}>🏆{ano}</Text>
              ))}
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
