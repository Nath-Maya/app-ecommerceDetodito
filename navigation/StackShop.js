import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes';
import Home from '../screens/Home';
import ItemListCategory from '../screens/ItemListCategory'
import ItemDetail from '../screens/ItemDetail';
import Logout from '../components/Logout';


const Stack = createStackNavigator();

export default function StackShop() {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: true,
        headerRight: () => <Logout/>
      }}
    >
        <Stack.Screen
            name={ROUTE.HOME}
            component={Home}
            options={{
              headerTitle: 'Tienda',
              headerBackVisible: false,
            }}
        /> 
        <Stack.Screen
            name="Categorías"
            component={ItemListCategory}
            options={{
              headerShown: true,
            }}
        />
        <Stack.Screen
            name="Detalle"
            component={ItemDetail}
        />
    </Stack.Navigator>
  )
}