
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator()

export default function StackAuth() {
  return (
    <Stack.Navitagor
        initialRouteName={ROUTE.LOGIN}
        screenOptions={{
        headerBackVisible: false,
        headerShadowVisible: false,
    }}>
        <Stack.Screen
            name={ROUTE.LOGIN}
            component={Login}
            options={{
            title: 'De todito',
            }}
        />
        <Stack.Screen
            name={ROUTE.SIGN_UP}
            component={SignUp}
            options={{
              title: 'Crear cuenta',
            }}
        />
    </Stack.Navitagor>
  )
}