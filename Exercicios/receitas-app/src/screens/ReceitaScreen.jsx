import { StyleSheet, Text, View, Image} from 'react-native'
import { Button, Card } from 'react-native-paper'



export default function ReceitaScreen({ navigation, route }) {

    console.log("Receita Recebido => ", route.params.item)

    const receita = route.params.item

  return (
    <View>
        <Card>
            <Card.Content>
                <Text>Nome: {receita.nome}</Text>
                <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
                <Text>Porções: {receita.porcoes}</Text>
                <Text>Ingredientes: {receita.ingredientes}</Text>
                <Image
                source={{ uri: receita.imagem }}  
                style={{width: 300, height: 400}}
                 />
            </Card.Content>
            <Card.Actions>
                <Button
                mode='contained'
                icon='arrow-left'
                onPress={() => navigation.goBack()}
                >
                Voltar
                </Button>
            </Card.Actions>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
