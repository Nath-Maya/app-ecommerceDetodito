import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes';
import Orders from '../screens/Orders';


const Stack = createStackNavigator();

export default function StackOrders() {
  
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
        <Stack.Screen
            name={ROUTE.ORDERS}
            component={Orders}
            options={{
              headerTitle: 'Ordenes',
            }}
        /> 
    </Stack.Navigator>
  )
}