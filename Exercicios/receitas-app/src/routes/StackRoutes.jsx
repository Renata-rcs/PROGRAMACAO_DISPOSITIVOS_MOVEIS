import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ReceitaScreen from "../screens/ReceitaScreen";

// Import do stack
import { createStackNavigator } from "@react-navigation/stack";

// Criando Stack
const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "Yellow",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="restaurant" size={24} color="yellow" />
              <Text style={{ color: "yellow", marginLeft: 8, fontSize: 18 }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="ReceitaScreen"
        component={ReceitaScreen}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="fast-food" size={24} color="yellow" />
              <Text style={{ color: "yellow", marginLeft: 8, fontSize: 18 }}>
                Detalhes da Receita
              </Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
