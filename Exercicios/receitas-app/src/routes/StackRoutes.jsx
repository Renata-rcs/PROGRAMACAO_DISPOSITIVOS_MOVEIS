import HomeScreen from '../screens/HomeScreen';
import ReceitaScreen from '../screens/ReceitaScreen';

// Import do stack
import { createStackNavigator } from '@react-navigation/stack'


// Criando Stack
const Stack = createStackNavigator()

export default function StackRoutes() {
    
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ReceitaScreen' component={ReceitaScreen} />
        
    </Stack.Navigator>
  )
}

