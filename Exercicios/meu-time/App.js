import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  function alerta() {
    alert("Gol do Corinthias");
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{ fontSize: 60, fontWeight: 800 }}>Corinthians</Text>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_sNEzysJFp8HIhS5GYFKivhL1k4-SPzOvaCeZZJFXSrwPuOoHUcJiDf7y7BPmI3CIRE&usqp=CAU",
          }}
          style={{
            height: 300,
            width: 300,
          }}
        />
        <Button title="Gol" onPress={alerta}></Button>
        <Text style={styles.text}>
          Por operários anarco-sindicalistas da região da Ponte Grande, no
          bairro do Bom Retiro, em São Paulo.
        </Text>
        <Text style={styles.text}>Mascote: o guerreiro São Jorge.</Text>
        <Text style={styles.text}>
          Títulos: O Corinthians é o clube com mais títulos do Campeonato
          Paulista, com 26 taças. Também ganhou um título mundial, quatro
          Campeonatos Brasileiros e três Copas do Brasil.
        </Text>

        <Text style={styles.text}>
          O Corinthians surgiu inspirado no futebol operário, ganhando
          rapidamente destaque no cenário paulista. Seu nome foi inspirado no
          Corinthian Football Club, da Inglaterra.
        </Text>

        <Text style={styles.text}>
          Rivalidade: O clube tem como principal rival o Palmeiras,
          protagonizando o clássico conhecido como "Dérbi Paulista". Outros
          grandes confrontos ocorrem contra São Paulo e Santos, formando os
          quatro grandes do futebol paulista.
        </Text>

        <Text style={styles.text}>
          Ídolos históricos: O Corinthians teve jogadores icônicos ao longo de
          sua história, como Sócrates, Rivelino, Marcelinho Carioca, Neto e
          Ronaldo Fenômeno.
        </Text>

        <Text style={styles.text}>
          Torcida: A torcida corintiana é uma das mais apaixonadas do Brasil,
          conhecida como "Fiel Torcida", sempre presente nos estádios e apoiando
          o time incondicionalmente.
        </Text>

        <Text style={styles.text}>
          Estádio: A Arena Corinthians, também conhecida como Neo Química Arena,
          foi inaugurada em 2014 e sediou jogos da Copa do Mundo daquele ano,
          incluindo a abertura do torneio.
        </Text>

        <Text style={styles.text}>
          Hino: O hino do Corinthians foi composto por Lauro D'Avila e é entoado
          com orgulho pelos torcedores em todos os jogos.
        </Text>

        <Text style={styles.text}>
          Maior artilheiro: Cláudio Christóvam de Pinho é o maior artilheiro da
          história do clube, com mais de 300 gols marcados.
        </Text>

        <Text style={styles.text}>
          Maior goleada: O Corinthians aplicou sua maior goleada na história ao
          vencer o Cobresal (Chile) por 8 a 0 na Copa Libertadores de 2016.
        </Text>

        <Text style={styles.text}>
          Título invicto: O Corinthians conquistou a Copa Libertadores de 2012
          de forma invicta, vencendo o Boca Juniors na final e garantindo o
          direito de disputar o Mundial de Clubes.
        </Text>

        <Text style={styles.text}>
          Mundial de Clubes da FIFA: Em 2012, o Corinthians se tornou bicampeão
          mundial ao vencer o Chelsea por 1 a 0, com gol de Paolo Guerrero, em
          Yokohama, no Japão.
        </Text>
        {/* ScrollView para exibir imagens lado a lado */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQ_-Gcyi26wi2tGGXwGqwo27_MBTIYNZ_HDX6yeJirXKQT2ESrP_Al2XugNZiyaMu2TE&usqp=CAU",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkzWm4W1L2cEmiCnkWcrp3FwPjdog9lqkk4MxT888S8SMCCVVkUO4iuWbmJrA9m3-eFY&usqp=CAU",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmHpj0BjN6e7GQqpijGXh895DPl7a-e58FOHLXmZIbou_TGlSppe8JxGPYNLtG9rbBDQ&usqp=CAU",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kAgWi_2-ROOrag212aIuAfIdzUWl8Wes8w&s",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkc5gfQZH9dIdK7t-vwu3gdEdMbFgDTO_VNg&s",
            }}
            style={styles.image}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20, 
  },
  text: {
    textAlign: "left", 
    fontSize: 16,
    marginBottom: 10
  },
  image: {
    height: 150,
    width: 150,
    marginHorizontal: 5,
  },
});
