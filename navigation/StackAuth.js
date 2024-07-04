import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

export default function StackAuth() {
  
  return (
    <Stack.Navigator initialRouteName={ROUTE.LOGIN}>
      {/* <Stack.Screen
        name={ROUTE.LOGIN}
        component={Login}
        options={{ title: 'De todito' }}
      />
      <Stack.Screen
        name={ROUTE.SIGN_UP}
        component={SignUp}
        options={{ title: 'Crear cuenta' }}
      /> */}
      <Stack.Screen
        name={ROUTE.TAB_NAVIGATOR} 
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}