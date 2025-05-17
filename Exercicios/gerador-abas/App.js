import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Mega Sena"
            component={MegaSenaScreen}
            options={{
              title: 'Mega Sena',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#6200ee',
              },
              headerTintColor: 'white',
              tabBarActiveTintColor: '#6200ee',  
              tabBarInactiveTintColor: 'gray', 
              tabBarIcon: ({ color, size }) => (
                <Icon name="dice-multiple" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Jogo do Bicho"
            component={JogoDoBichoScreen}
            options={{
              title: 'Jogo do Bicho',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#6200ee',
              },
              headerTintColor: 'white',
              tabBarActiveTintColor: '#6200ee',  
              tabBarInactiveTintColor: 'gray',  
              tabBarIcon: ({ color, size }) => (
                <Icon name="paw" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
