import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Button, Card } from 'react-native-paper'

const carros = [{
    nome: 'Gol',
    ano: '2014',
    cor: 'Prata Linear',
    Fabricante: 'Volkswagem'
 },
 {
    nome: 'Civic',
    ano: '2010',
    cor: 'Prata',
    Fabricante: 'Honda'
 },
 {
    nome: 'Uno',
    ano: '2020',
    cor: 'Branco',
    Fabricante: 'Fiat'
 }
]
export default function ListaScreen({ navigation, route}) {
  return (
    <View>
      <FlatList 
        data={carros}
        renderItem={({ item }) => (
            <Card style={{ margin: 10 }}>
                <Card.Content>
                    <Text>Carro: {item.nome}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button 
                        mode='contained'
                        icon='arrow-right'
                        onPress={() => navigation.navigate('ItemScreen', { item }) }
                    >
                        Ver Detalhes
                    </Button>
                </Card.Actions>
            </Card>
        )}      
      />
    </View>
  )
}

const styles = StyleSheet.create({})