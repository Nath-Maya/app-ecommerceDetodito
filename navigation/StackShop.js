
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes';
import Home from '../screens/Home';
import ItemListCategory from '../screens/ItemListCategory'

const Stack = createStackNavigator();

export default function StackShop() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
        {/* <Stack.Screen
            name={ROUTE.HOME}
            component={Home}
        />  */}
        <Stack.Screen
            name="Categorías"
            component={ItemListCategory}
        />
    </Stack.Navigator>
  )
}