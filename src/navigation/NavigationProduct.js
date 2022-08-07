import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreens from '../screens/HomeScreens';
import Nofication from '../screens/Nofication';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const NavigationProduct = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreens" component={HomeScreens} />
      <Stack.Screen name="Nofication" component={Nofication} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default NavigationProduct

const styles = StyleSheet.create({})