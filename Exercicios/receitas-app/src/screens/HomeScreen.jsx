import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Button, Card } from 'react-native-paper'

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempoPreparo: "2 horas",
    porcoes: 8,
    imagem:
      "https://i.pinimg.com/236x/80/b5/44/80b544b4f56e66fde329b8cf8279e3b3.jpg",
    ingredientes: [
      "1kg de feijão preto",
      "500g de carne seca",
      "300g de linguiça",
      "200g de costelinha",
      "2 laranjas",
      "Couve a gosto",
      "Arroz para acompanhar",
    ],
    modoPreparo: [
      "1. Deixe o feijão de molho por 12 horas",
      "2. Cozinhe o feijão na panela de pressão",
      "3. Adicione as carnes",
      "4. Cozinhe até ficar macio",
      "5. Sirva com arroz, couve e laranja",
    ],
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempoPreparo: "40 minutos",
    porcoes: 6,
    imagem:
      "https://i.pinimg.com/236x/ae/fe/5d/aefe5d91ac74b5f9d95c38f1a97cfc38.jpg",
    ingredientes: [
      "1kg de peito de frango",
      "2 caixas de creme de leite",
      "2 colheres de extrato de tomate",
      "2 colheres de ketchup",
      "2 colheres de mostarda",
      "Champignon a gosto",
      "Batata palha para acompanhar",
    ],
    modoPreparo: [
      "1. Corte o frango em cubos",
      "2. Doure o frango na panela",
      "3. Adicione os molhos e o champignon",
      "4. Adicione o creme de leite",
      "5. Sirva com arroz e batata palha",
    ],
  },
  {
    id: 3,
    nome: "Bolo de Chocolate",
    tempoPreparo: "50 minutos",
    porcoes: 12,
    imagem:
      "https://i.pinimg.com/236x/ef/d3/0b/efd30bd087d55dc9b51cc77507893531.jpg",
    ingredientes: [
      "4 ovos",
      "2 xícaras de açúcar",
      "2 xícaras de farinha",
      "1 xícara de chocolate em pó",
      "1 xícara de óleo",
      "1 xícara de leite",
      "1 colher de fermento",
    ],
    modoPreparo: [
      "1. Bata os ovos com o açúcar",
      "2. Adicione os ingredientes secos",
      "3. Adicione os líquidos",
      "4. Por último o fermento",
      "5. Asse em forno médio por 40 minutos",
    ],
  },
];


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Receitas</Text>
      <FlatList
        data={receitas}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.nomeReceita}>{item.nome}</Text>
              <Image source={{ uri: item.imagem }} style={styles.imagemReceita} />
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained"
                icon="arrow-right"
                buttonColor='red'
                textColor='yellow'
                onPress={() => navigation.navigate('ReceitaScreen', { item })}
              >
                Ver Detalhes
              </Button>
            </Card.Actions>
          </Card>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    margin: 16,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  nomeReceita: {
    paddingBottom: 16,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  imagemReceita: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  cardActions: {
    justifyContent: 'center',
    paddingBottom: 12,
  },
});