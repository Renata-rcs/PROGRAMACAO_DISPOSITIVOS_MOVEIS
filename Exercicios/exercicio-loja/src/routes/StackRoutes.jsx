import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ListaProdutosScreen from '../screens/ListaProdutosScreen';
import ProdutoScreen from '../screens/ProdutoScreen';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
         screenOptions={{
        headerTintColor: '#E91E63', // rosa para as setas e botões do header
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ 
          title: 'Categorias', 
          headerTitleAlign: 'center',
          headerTitleStyle: { color:'#880E4F', fontWeight: 'bold' }, // rosa
        }}
      />
      <Stack.Screen
        name='ListaProdutosScreen'
        component={ListaProdutosScreen}
        options={{ 
          title: 'Produtos', 
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#880E4F', fontWeight: 'bold' }, // rosa
        }}
      />
      <Stack.Screen
        name='ProdutoScreen'
        component={ProdutoScreen}
        options={{ 
          title: 'Detalhes do Produto', 
          headerTitleAlign: 'center',
          headerTitleStyle: { color: '#880E4F', fontWeight: 'bold' }, // rosa
        }}
      />
    </Stack.Navigator>
  );
}

