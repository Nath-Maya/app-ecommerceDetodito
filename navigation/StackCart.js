import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes';
import Cart from '../screens/Cart';


const Stack = createStackNavigator();

export default function StackCart() {
  
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
        <Stack.Screen
            name={ROUTE.CART}
            component={Cart}
            options={{
              headerTitle: 'Carrito',
            }}
        /> 
    </Stack.Navigator>
  )
}