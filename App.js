import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './src/navigation/tabs';
import {NavigationContainer} from '@react-navigation/native';
import NavigationProduct from './src/navigation/NavigationProduct';
import UserNavigation from './src/navigation/UserNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <UserNavigation />
    </NavigationContainer>
    // <View>
    //   <Splash />
    // </View>
  );
}

const styles = StyleSheet.create({

});
