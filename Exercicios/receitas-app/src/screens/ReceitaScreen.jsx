import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function ReceitaScreen({ navigation, route }) {
  const receita = route.params.item;

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.nomeReceita}>{receita.nome}</Text>
          <Image source={{ uri: receita.imagem }} style={styles.imagem} />
          <Text style={styles.info}>⏱ Tempo de Preparo: {receita.tempoPreparo}</Text>
          <Text style={styles.info}>👨‍🍳 Porções: {receita.porcoes}</Text>

          <Text style={styles.subtitulo}>Ingredientes:</Text>
          {receita.ingredientes.map((ingrediente, index) => (
            <Text key={index} style={styles.item}>• {ingrediente}</Text>
          ))}

          <Text style={styles.subtitulo}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((passo, index) => (
            <Text key={index} style={styles.item}>{passo}</Text>
          ))}
        </Card.Content>

        <Card.Actions style={styles.botoes}>
          <Button
            mode="contained"
            icon="arrow-left"
            buttonColor='red'
            textColor='yellow'
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
  },
  card: {
    margin: 16,
    borderRadius: 12,
    elevation: 3,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  nomeReceita: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
  },
  subtitulo: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  item: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 2,
  },
  botoes: {
    justifyContent: 'center',
    marginTop: 10,
  },
});
