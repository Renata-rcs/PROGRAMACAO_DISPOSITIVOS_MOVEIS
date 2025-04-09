import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from 'react-native-vector-icons'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
   <PaperProvider>
      <NavigationContainer>
        
        <Tab.Navigator>

          <Tab.Screen 
            name='HomeScreen' 
            component={HomeScreen}
            options={{
              title: 'Início',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'pink'
              },
              tabBarActiveTintColor: 'pink',
              tabBarInactiveTintColor: 'blue',
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
            }}
             />

          <Tab.Screen 
            name='ProfileScreen' 
            component={ProfileScreen} 
            options={{
              title: 'Perfil',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'pink'
              },
              tabBarActiveTintColor: 'pink',
              tabBarInactiveTintColor: 'blue',
              tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} 
              />
            }}
            />
          <Tab.Screen 
            name='Configuraçãoes' 
            component={SettingsScreen} 
            options={{
              title: 'Início',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'pink'
              },
              tabBarActiveTintColor: 'pink',
              tabBarInactiveTintColor: 'blue',
              tabBarIcon: ({ color, size }) => <Ionicons name='cog' color={color} size={size} />
            }}
            />

        </Tab.Navigator>

      </NavigationContainer>
   </PaperProvider>
);
}
