import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/category-list")
      .then((resposta) => {
        console.log(resposta.data)
        setCategorias(resposta.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar categorias:", erro);
      });
  }, []);

  return (
    <View style={estilos.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Card
            style={estilos.cartao}
            onPress={() => navigation.navigate('ListaProdutosScreen', { category: item })}
          >
            <Card.Content style={estilos.linha}>
              <Text style={estilos.texto}>{item}</Text>
              <IconButton icon="chevron-right" size={24} />
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F6', // rosa muito claro
    padding: 12,
    justifyContent: 'center',
  },
  cartao: {
    marginVertical: 6,
    padding: 12,
    backgroundColor: '#F8BBD0', // rosa claro
    borderRadius: 10,
    elevation: 2, // sombra Android
    shadowColor: '#B37E8E', // sombra rosa suave iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#880E4F', // rosa escuro para o texto
    fontWeight: '600',
  },
});
