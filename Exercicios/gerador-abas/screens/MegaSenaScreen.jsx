import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Card, Text, Button } from "react-native-paper";

export default function MegaSenaScreen() {
  const [numerosSorteados, setNumerosSorteados] = useState([]);
  const [historico, setHistorico] = useState([]);

  function gerarNumerosMegaSena() {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    numeros.sort((a, b) => a - b);
    setNumerosSorteados(numeros);
    setHistorico([...historico, numeros]);
  }

  function resetar() {
    setNumerosSorteados([]);
    setHistorico([]);
  }

  return (
    <ScrollView style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text
              variant="displaySmall"
              style={{ textAlign: "center", margin: 20 }}
            >
              Mega Sena
            </Text>

            {/* Painel de Números */}
            <View style={styles.grid}>
              {Array.from({ length: 60 }, (_, i) => i + 1).map((numero) => (
                <TouchableOpacity
                  key={numero}
                  style={[
                    styles.numero,
                    numerosSorteados.includes(numero) && styles.numeroSorteado,
                  ]}
                >
                  <Text style={styles.numeroTexto}>{numero}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Números Sorteados Abaixo */}
            {numerosSorteados.length > 0 && (
              <View style={styles.resultado}>
                <Text variant="titleLarge">Números Sorteados:</Text>
                <Text variant="headlineMedium">
                  {numerosSorteados.join(" - ")}
                </Text>
              </View>
            )}
          </Card.Content>

          <Card.Actions style={styles.botoes}>
            <Button onPress={resetar}>Resetar</Button>
            <Button onPress={gerarNumerosMegaSena}>Gerar</Button>
          </Card.Actions>
        </Card>

        {/* Histórico */}
        <Card style={styles.card}>
          <Card.Content>
            <Text
              variant="displaySmall"
              style={{ textAlign: "center", margin: 20 }}
            >
              Histórico
            </Text>
            {historico.map((item, index) => (
              <Text key={index} variant="labelLarge">
                {`Jogo ${index + 1}: ${item.join(" - ")}`}
              </Text>
            ))}
          </Card.Content>
        </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    paddingBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 16,
  },
  numero: {
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  numeroSorteado: {
    backgroundColor: "#4CAF50",
  },
  numeroTexto: {
    color: "#000",
    fontWeight: "bold",
  },
  resultado: {
    margin: 24,
    alignItems: "center",
  },
  botoes: {
    alignItems: "center",
    justifyContent: "center",
  },
});
