import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreens from '../screens/HomeScreens';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Nofication from '../screens/Nofication';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={ { headerShown: false } }

            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom:25,
                    left:20,
                    right:20,
                    elevetion:0,
                    backgroundColor:'#ffffff',
                    borderRadius:15,
                    height:90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="HomeScreens" component={HomeScreens} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>

                    <Image
                        source={require('../Images/home.png')}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor:focused ? '#00FA9A' : '#868686',
                        }}
                    />
                    <Text style={{color:focused ? '#00FA9A' : '#868686', fontSize:15}}>
                        Trang chủ
                    </Text>

                    </View>
                ),
            }} />
            <Tab.Screen name="Cart" component={OrdersScreen} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>

                    <Image
                        source={require('../Images/cart.png')}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor:focused ? '#00FA9A' : '#868686',
                        }}
                    />

                    <Text style={{color:focused ? '#00FA9A' : '#868686', fontSize:15}}>
                        Giỏ hàng
                    </Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Nofication" component={Nofication} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image
                        source={require('../Images/bell.png')}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor:focused ? '#00FA9A' : '#868686',
                        }}
                    />

                    <Text style={{color:focused ? '#00FA9A' : '#868686', fontSize:15}}>
                        Thông báo
                    </Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image
                        source={require('../Images/user.png')}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                            tintColor:focused ? '#00FA9A' : '#868686',
                        }}
                    />

                    <Text style={{color:focused ? '#00FA9A' : '#868686', fontSize:15}}>
                        Hồ sơ
                    </Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor:'#7F5DF0',
        shadowOffset:{width:0,height:10,
    },
    shadowOpcity: 0.25,
        shadowRadius:3.5,
        elevation:5,
    }
});
export default Tabs;