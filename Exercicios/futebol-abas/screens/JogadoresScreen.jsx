import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Text, Card, Title } from "react-native-paper";

export default function JogadoresScreen() {
  const jogadores = [
    {
      nome: "Gabriel Barbosa",
      numero: 9,
      imagem:
        "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg",
    },
    {
      nome: "Arrascaeta",
      numero: 14,
      imagem:
        "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg",
    },
    {
      nome: "Everton Ribeiro",
      numero: 7,
      imagem:
        "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg",
    },
    {
      nome: "David Luiz",
      numero: 23,
      imagem:
        "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg",
    },
    {
      nome: "Pedro",
      numero: 21,
      imagem:
        "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg",
    },
  ];

  return (
    <ScrollView>
      <View>
        <FlatList
          data={jogadores}
          renderItem={({ item }) => (
            <Card style={{ width: "90%", margin: 20 }}>
              <Title style={styles.texto}>{item.nome}</Title>
              <Card.Content>
                <Text style={styles.texto}>{item.numero}</Text>
              </Card.Content>
              <Card.Cover
                style={{ width: "100%", height: 400 }}
                source={{ uri: item.imagem }}
              />
            </Card>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  texto: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
