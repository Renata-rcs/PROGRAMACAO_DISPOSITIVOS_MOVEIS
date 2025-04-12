import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from 'react-native-vector-icons'
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator()

export default function App() {
  return (

    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
        
        <Tab.Screen 
           name='Títulos' 
           component={TitulosScreen}
           options={{
             title: 'Títulos',
             headerTitleAlign: 'center',
             headerStyle: {
               backgroundColor: 'red'
             },
             tabBarActiveTintColor: 'black',
             tabBarInactiveTintColor: 'red',
             tabBarIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />

            }}
        />
        <Tab.Screen 
           name='Jogadores' 
           component={JogadoresScreen}
           options={{
             title: 'Jogadores',
             headerTitleAlign: 'center',
             headerStyle: {
               backgroundColor: 'red'
             },
             tabBarActiveTintColor: 'black',
             tabBarInactiveTintColor: 'red',
             tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />

            }}
        />
        <Tab.Screen 
           name='HomeScreen' 
           component={EscudoScreen}
           options={{
             title: 'Escudo',
             headerTitleAlign: 'center',
             headerStyle: {
               backgroundColor: 'red'
             },
             tabBarActiveTintColor: 'black',
             tabBarInactiveTintColor: 'red',
             tabBarIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />

            }}
        />


        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

