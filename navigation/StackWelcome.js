import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ROUTE } from './Routes';
import Welcome from '../screens/Welcome';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function StackWelcome() {
  
  return (
    <Stack.Navigator >
        {/* <Stack.Screen name={ROUTE.WELCOME} component={Welcome}/> */}
        <Stack.Screen name={ROUTE.HOME} component={TabNavigator}/>
    </Stack.Navigator>
  )
}