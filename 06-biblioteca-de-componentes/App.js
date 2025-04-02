import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button mode="contained-tonal" onPress={() => console.log('Clicado!')}>Clique Aqui</Button>
        <Button mode="elevated" onPress={() => console.log('Clicado!')}>Clique Aqui</Button>
        <Button mode="contained" icon="camera" onPress={() => console.log('Clicado!')}>Clique Aqui</Button>
        <Button mode="outlined" onPress={() => console.log('Clicado!')}>Clique Aqui</Button>
        <Button mode="text" onPress={() => console.log('Clicado!')}>Clique Aqui</Button>

        <Text>Uva</Text>
        <Divider />
        <Text>Maçã</Text>
        <Divider />
        <Text>Banana</Text>
        <Divider />
        <Text>Laranja</Text>
        <Divider />

        <Text variant="titleLarge">Um texto qualquer</Text>
        <Text variant="headlineLarge">Um texto qualquer</Text>
        <Text variant="displayLarge">Um texto qualquer</Text>

        <Card>
          <Card.Content>
            <Title>Um texto qualquer</Title>
            <Paragraph>
              Um parágrafo qualquer Um parágrafo qualquer Um parágrafo qualquer...
            </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>

        <Card>
          <Card.Content>
            <Title>Outro título</Title>
            <Paragraph>
              Um parágrafo qualquer Um parágrafo qualquer...
            </Paragraph>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Title>Mais um título</Title>
            <Paragraph>
              Um parágrafo qualquer Um parágrafo qualquer...
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
