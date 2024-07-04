import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE } from './Routes';
import StackAuth from './StackAuth';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

export default function MainNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
        <Stack.Screen
          name={ROUTE.WELCOME}
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTE.STACK_AUTH}
          component={StackAuth}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
