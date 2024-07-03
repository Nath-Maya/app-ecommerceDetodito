import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes'
import ListAddress from '../screens/ListAddress'
import MyProfile from '../screens/MyProfile'
import LocationSelector from '../screens/LocationSelector'

const Stack = createStackNavigator()

export default function StackMyProfile() {
  
  return (
    <Stack.Navigator
    screenOptions={{
        headerShadowVisible: false,
      }}>
        <Stack.Screen
            name={ROUTE.MY_PROFILE}
            component={MyProfile}
            options={{ headerTitle: 'Perfil' }}
        />
        <Stack.Screen
            name={ROUTE.MY_LOCATION}
            component={ListAddress}
            options={{ headerTitle: 'Mi ubicacion' }}
            />
        <Stack.Screen
            name={ROUTE.LOCATION_SELECTOR}
            component={LocationSelector}
            options={{ headerTitle: 'Seleccionar ubicacion' }}
            />
    </Stack.Navigator>
  )
}

