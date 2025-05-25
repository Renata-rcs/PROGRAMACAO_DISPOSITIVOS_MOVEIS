import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

export default function ProdutoScreen({ route, navigation }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);
  

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduto(res.data);
        
      })
      .catch(err => {
        console.error('Erro ao buscar produto:', err);
        
      });
  }, [id]);


  if (!produto) {
    return (
      <View style={styles.loadingContainer}>
        <Text variant="titleLarge">Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Cover
         source={{ uri: produto.thumbnail }} 
         style={{ width: '100%', height: 350, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        />
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>{produto.title}</Text>
          <Text variant="bodyMedium" style={styles.price}>💲 {produto.price}</Text>
          <Text variant="bodySmall" style={styles.rating}>⭐ {produto.rating}</Text>
          <Text variant="bodyMedium" style={styles.description}>{produto.description}</Text>
          <Text variant="bodySmall" style={styles.category}>Categoria: {produto.category}</Text>
          <Text variant="bodySmall" style={styles.brand}>Marca: {produto.brand}</Text>
          <Text variant="bodySmall" style={styles.stock}>Estoque: {produto.stock}</Text>
        </Card.Content>
      </Card>

      <Text variant="titleMedium" style={styles.galleryTitle}>Galeria</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
        {produto.images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.galleryImage}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      <Button 
        mode="contained" 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FCE4EC', // rosa bem claro, quase pastel
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCE4EC',
  },
  title: {
    marginTop: 16,
    fontWeight: '700',
    fontSize: 24,
    color: '#880E4F', // rosa forte escuro
  },
  price: {
    marginVertical: 8,
    color: '#C2185B', // rosa vibrante
    fontWeight: '600',
    fontSize: 18,
  },
  rating: {
    marginBottom: 8,
    color: '#F48FB1', // rosa claro vibrante para estrelas
    fontWeight: '600',
  },
  description: {
    marginVertical: 12,
    color: '#6A1B4D', // rosa médio escuro para texto
    fontSize: 16,
    lineHeight: 22,
  },
  category: {
    color: '#880E4F',
    fontStyle: 'italic',
    fontSize: 14,
    marginBottom: 4,
  },
  brand: {
    color: '#880E4F',
    fontSize: 14,
    marginBottom: 4,
  },
  stock: {
    marginBottom: 12,
    color: '#AD1457',
    fontWeight: '600',
  },
  galleryTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontWeight: '700',
    fontSize: 20,
    color: '#880E4F',
  },
  gallery: {
    flexDirection: 'row',
  },
  galleryImage: {
    width: 130,
    height: 180,
    borderRadius: 10,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#F8BBD0', // borda rosa clara suave
  },
  backButton: {
    marginTop: 28,
    backgroundColor: '#880E4F', // botão rosa escuro
    borderRadius: 8,
  },
});
