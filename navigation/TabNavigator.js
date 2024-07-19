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
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  const totalItems = useSelector(state => state.cart.totalItems);
  const totalOrders = useSelector(state => state.orders.totalOrders);

  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray'
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
          title: 'Mi Carrito',
          tabBarBadge: totalItems > 0 ? totalItems : null,
        }}
      />
      <Tab.Screen
        name='Ordenes' 
        component={StackOrders}
        options={{
          tabBarIcon: () => (<OrderIcon/>),
          title: 'Ordenes',
          headerShown: false,
          tabBarBadge: totalOrders > 0 ? totalOrders : null,
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

