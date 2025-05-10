import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from 'react-native-vector-icons';

import JogadoresScreen from "../screens/JogadoresScreen";
import EscudoScreen from "../screens/EscudoScreen";
import TitulosScreen from "../screens/TitulosScreen";



const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="EscudoScreen"
        component={EscudoScreen}
        options={{
          title: "Escudo",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shield-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen 
        name="JogadoresScreen" 
        component={JogadoresScreen} 
        options={{
          title: "Jogadores",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen 
        name="TitulosScreen" 
        component={TitulosScreen} 
        options={{
          title: "Títulos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}