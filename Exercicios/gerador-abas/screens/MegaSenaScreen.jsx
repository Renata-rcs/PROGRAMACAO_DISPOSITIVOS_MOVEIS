import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Card, Text, Button } from "react-native-paper";

export default function MegaSenaScreen() {
  const [numerosSorteados, setNumerosSorteados] = useState([]);
  const [historico, setHistorico] = useState([]);

  const gerarNumerosMegaSena = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    numeros.sort((a, b) => a - b);
    setNumerosSorteados(numeros);
    setHistorico([numeros, ...historico]);
  };

  const resetar = () => {
    setNumerosSorteados([]);
    setHistorico([]);
  };

  const renderNumero = (numero) => {
    const nSorteado = numerosSorteados.includes(numero);
    return (
      <View
        key={numero}
        style={[styles.numero, nSorteado && styles.numeroSorteado]}
      >
        <Text style={styles.textoNumero}>{numero}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Text variant="headlineMedium" style={{ textAlign: 'center'}}>Mega Sena</Text>
          <View style={styles.grid}>
            {Array.from({ length: 60 }, (_, i) => renderNumero(i + 1))}
          </View>
        </Card.Content>
        <Card.Actions>
          <Button onPress={resetar}>Resetar</Button>
          <Button onPress={gerarNumerosMegaSena}>Gerar</Button>
        </Card.Actions>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <Card.Content>
          <Text variant="headlineMedium" style={{ textAlign: 'center'}}>Histórico</Text>
          <FlatList
            data={historico}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item, index }) => (
              <Text variant="labelLarge">
                {`Jogo ${index + 1}: ${item.join(", ")}`}
              </Text>
            )}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  numero: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  numeroSorteado: {
    backgroundColor: "#4caf50",
  },
  textoNumero: {
    color: "#fff",
    fontWeight: "bold",
  },
});
