import React, { useState, useEffect} from 'react'
import { View, Text } from 'react-native'


//https://reactnavigation.org/docs/stack-navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Splash01 from '../screens/Splash01';
import Splash02 from '../screens/Splash02';
import Splash03 from '../screens/Splash03';

import Login from '../screens/Login';
import Register from '../screens/Register';

import Tabs from './tabs';

export default UserNavigation = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true)

    useEffect(() => {
        setTimeout(() =>{
            setShowSplashScreen(false)
        }, 3000)
    }, [])
    return (

        <Stack.Navigator initialRouteName="Splash01" screenOptions={{ headerShown: false }}>
            {
                showSplashScreen ?
                <Stack.Screen name="Splash" component={Splash01} options={{ headerShown: false}}/>
                : null
            }
            <Stack.Screen name="Splash02" component={Splash02} />
            <Stack.Screen name="Splash03" component={Splash03} />

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>

    )
}


