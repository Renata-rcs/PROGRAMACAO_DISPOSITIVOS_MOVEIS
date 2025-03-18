// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// Função que representa o componente
export default function App() {
//Lógica do componente
const nome = "Renata Carvalho"

function alerta(){
  alert("Clicou no Botão!!!")
}
// Retorno dessa função com o template do que vai ser renderizadi na tela (JSX)
  return (
    // ScrollVienw permite que o conteúdo vá até depois da barra de rolagem
    // Não pode ser usado sozinho, tem que ter um View dentro
    //
    <ScrollView>
    <View style={styles.container}>
      {/* Comentário dentro do JSX */}
      {/* */}
      <StatusBar style="auto" />
      <Text style={styles.textGrande}>Olá</Text>
      <Text style={{fontSize: 50, fontStyle: 'italic'}}>Algum texto</Text>
      <Text>Algum texto qualquer.</Text>
      <Text>Hello 😉</Text>
      <Text>{nome}</Text>
      <Button title='Enviar' onPress={alerta}></Button>
     
      <Image
        source={{
         uri: "https://lumiere-a.akamaihd.net/v1/images/stitch-rasgando-papel-1920x1080_234e1a3f.png"
        }}
       style={{
        height: 300,
        width: 300
       }}
      />
      <Image
        source={require('./imagens/neymar.jpeg')
        }
       style={{
        height: 300,
        width: 300
       }}
      />
      <Image
        source={require('./imagens/neymar.jpeg')
        }
       style={{
        height: 300,
        width: 300
       }}
      />
     
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    color: 'blue',
    fontSize: 40,
    fontWeight: 900
  }
});
