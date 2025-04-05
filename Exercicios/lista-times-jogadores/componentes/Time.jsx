import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import { Card, Text } from "react-native-paper";
import Jogador from './Jogador';

export default function Time(props) {

    const {nome, anoFundacao, mascote, imagem, jogadores} = props

  return (
    <Card style={{margin: 10}}>
    <Card.Content>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>{nome}</Text>
      <Text>Ano Da Fundação: {anoFundacao}</Text>
      <Text>Mascote: {mascote}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: imagem }} />
    <Card.Actions>
    </Card.Actions>
      <FlatList 
          horizontal
          data={jogadores}
          renderItem={({ item}) => (
              <Jogador
                  nome={item.nome}
                  numero={item.numero}
                  imagem={item.imagem}
              />
          )}
      />
  </Card>
  )
}

const styles = StyleSheet.create({})