import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Pessoa(props) {

    const { dados } = props

    console.log(dados)

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Jogador: {dados.nome}</Text>
      <Text  style={styles.texto}>Idade: {dados.idade}</Text>

      <Image 
        source={{ uri: dados.imagem}}
        style={{
            height: 200,
            width: 200
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        borderWidth: 10,
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 10,
        fontWeight: 600
    }
})