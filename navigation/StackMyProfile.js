import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE } from './Routes';
import MyProfile from '../screens/myProfile'
import ImageSelector from '../screens/ImageSelector';

const Stack = createStackNavigator();

export default function StackMyProfile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: true,
      }}>
      <Stack.Screen
        name={ROUTE.MY_PROFILE}
        component={MyProfile}
        options={{ headerTitle: 'Perfil' }}
      />
      <Stack.Screen
        name={ROUTE.IMAGE_SELECTOR}
        component={ImageSelector}
        options={{ headerTitle: 'Seleccionar imagen' }}
      />
    </Stack.Navigator>
  );
}
