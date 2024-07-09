import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE } from './Routes';
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector';
import Logout from '../components/Logout';

const Stack = createStackNavigator();

export default function StackMyProfile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: true,
        headerRight: () => <Logout/>
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
