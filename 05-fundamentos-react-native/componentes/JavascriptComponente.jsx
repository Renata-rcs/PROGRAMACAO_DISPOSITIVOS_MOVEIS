import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {

    const nome = "Renata Carvalho"
    const idade = 21

    function checkMaiorIdade(){
        if (idade >= 18){
            return "Maior de Idade"
        }
        else {
            return "Menor de Idade"
        }
    }

    function alerta(){
        alert(" Clicou no Botão!")
    }
  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40 = {idade + 40}</Text>
      <Text>È maior de idade? {checkMaiorIdade()}</Text>
      <Text>Check 18+: {idade >= 18 ? "18+" : "18-"}</Text>
      <Button title='Clicar' onPress={alerta}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})