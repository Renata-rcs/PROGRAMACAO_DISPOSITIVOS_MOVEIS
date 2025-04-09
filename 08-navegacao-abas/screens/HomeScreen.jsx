import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card, Title, Paragraph } from 'react-native-paper'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{ textAlign: 'center' }} >Tela de Início</Text>

      <Card style={{ width: '90%', margin: 20}}>
        <Card.Content>
          <Title>Um título</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque odio, distinctio quisquam rem pariatur odit. Nobis dolorem corrupti est. Exercitationem esse dicta labore perspiciatis similique harum animi accusamus dolorem?</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}/>
      </Card>
      
      <Card  style={{ width: '90%'}}>
        <Card.Content>
          <Title>Um título</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque odio, distinctio quisquam rem pariatur odit. Nobis dolorem corrupti est. Exercitationem esse dicta labore perspiciatis similique harum animi accusamus dolorem?</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}/>
      </Card>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})