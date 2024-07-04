import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ShopIcon } from '../icons/ShopIcon';
import { CartIcon } from '../icons/CartIcon';
import { OrderIcon } from '../icons/OrderIcon'
import { ProfileIcon } from '../icons/ProfileIcon'
import StackShop from './StackShop';
import StackCart from './StackCart';
import StackOrders from './StackOrders';
import StackMyProfile from './StackMyProfile';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green'
      }}
    >
      <Tab.Screen
        name='Tienda'
        component={StackShop}
        options={{
          tabBarIcon: () => (<ShopIcon/>),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Carrito'    
        component={StackCart}
        options={{
          tabBarIcon: () => (<CartIcon/>),
          headerShown: false,
          title: 'Carrito',
        }}
      />
      <Tab.Screen
        name='Ordenes' 
        component={StackOrders}
        options={{
          tabBarIcon: () => (<OrderIcon/>),
          title: 'Ordenes',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Perfil'     
        component={StackMyProfile}
        options={{
          tabBarIcon: () => (<ProfileIcon/>),
          title: 'Mi Perfil',
        }}
      />
    </Tab.Navigator>
  )
}

