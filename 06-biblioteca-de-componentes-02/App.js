import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Divider, PaperProvider, Card, Title, Paragraph } from 'react-native-paper';


export default function App() {

  //const lista = ["Uva", "Maça", "Banana", "Laranja"]

  const lista = [
    {
      titulo: "Card 1",
      descricao: "Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 2",
      descricao: "Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 3",
      descricao: "Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 4",
      descricao: "Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa",
      imagem: "https://picsum.photos/700"
    },
    {
      titulo: "Card 5",
      descricao: "Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa Alguma coisa coisa",
      imagem: "https://picsum.photos/700"
    },
  ]

  return (
    <PaperProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* {
        lista.map(
          (fruta) => <Text>{fruta}</Text>
        )
      }

      <FlatList
        data={lista}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <FlatList
        data={lista}
        renderItem={({ item }) => 
          <View>
            <Text>{item}</Text>
            <Divider />
          </View>
        }
      /> */}

<FlatList
         horizontal
         data={lista}
         renderItem={({item}) => (
           <Card>
             <Card.Content>
             <Title>{item.titulo}</Title>
             <Paragraph>{item.descricao}</Paragraph>
             </Card.Content>
             <Card.Cover source={{uri: item.imagem}}/>
           </Card>
         )}
       />
 
       <FlatList
         data={lista}
         renderItem={({item}) => (
           <Card>
             <Card.Content>
             <Title>{item.titulo}</Title>
             <Paragraph>{item.descricao}</Paragraph>
             </Card.Content>
             <Card.Cover source={{uri: item.imagem}}/>
           </Card>
         )}
       />

      
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
