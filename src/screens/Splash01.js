import { StyleSheet, Text, View, Image, ImageBackground, StatusBar } from 'react-native'
import React from 'react'

const Splash01 = () => {

    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <ImageBackground source={require('../Images/Pattern.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.logoContainer}>
                    <Image source={require('../Images/Logo.png')} resizeMode="cover" style={styles.logo} />
                    <Text style={styles.text}>FoodNinja</Text>
                    <Text style={styles.textDeliver}>Deliver Favorite Food</Text>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Splash01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',

    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    logoContainer: {
        alignItems: "center"
    },
    logo: {
        width: 175,
        height: 139
    },
    text: {
        color: "#53E88B",
        fontSize: 40,
        lineHeight: 54,
        fontWeight: "400",
        textAlign: "center",
    },
    textDeliver: {
        fontSize: 13,
        color: "#09051C",
        lineHeight: 15,
        fontWeight: "600"
    }
})