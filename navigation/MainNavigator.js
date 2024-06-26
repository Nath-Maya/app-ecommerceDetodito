import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackWelcome from './StackWelcome'

export default function MainNavigator() {
  return (
    <NavigationContainer>
        <StackWelcome/>
    </NavigationContainer>
  )
}