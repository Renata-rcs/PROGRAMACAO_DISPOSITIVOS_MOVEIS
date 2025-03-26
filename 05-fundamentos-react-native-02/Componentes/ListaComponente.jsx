import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

const lista = ["Uva", "Maçã", "Banana", "Laranja"]

  return (
    <View>
      {lista.map((fruta) => <Text style={styles.texto}>{fruta}</Text>)}

      {lista.map(
        (fruta) => {
            return(
                <View style={styles.containerAmarelo}>
                    <Text style={styles.texto}>{fruta}</Text>
                </View>
            )
        }
      )}

      {
        lista.map(
            (fruta) => {
                return (
                    <View>
                    <Text>{fruta}</Text>
                </View>
                )
            }
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    },
    containerAmarelo: {
        backgroundColor: "yellow"
    }
})