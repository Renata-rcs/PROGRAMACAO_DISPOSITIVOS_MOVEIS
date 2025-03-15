// Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, style } from 'react-native';

// Função que define o componente
// Retornar o que vai ser renderizado na tela(Template feito com JSX)
export default function App() {
  // Lógica do componente
  const nome = "Renata"

  function alerta(){
    alert("Clicou no botão")
  }
  // Retorno com JSX
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={{
          uri: "https://lumiere-a.akamaihd.net/v1/images/stitch-rasgando-papel-1920x1080_234e1a3f.png"
        }}
       style={{
        height: 400,
        width: 400
       }}
      />
      <Text>Stitch 👋</Text>
      <Text>Bem Vindo {nome}</Text>
      <Text>{2 + 2}</Text>

      <Button title='Clicar' onPress={alerta}></Button>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
