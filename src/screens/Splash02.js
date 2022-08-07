import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const Splash02 = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode='cover'
                    source={require('../Images/Illustartion.png')} />
            </View>

            <View style={styles.textContainer}>
                <View style={{ marginTop: 39 }}>
                    <Text style={styles.textFindFood}>Find your Comfort Food here</Text>
                    <Text style={styles.textFindFood}>Food here</Text>
                    <Text style={styles.textOder}>Here You Can find a chef or dish for every</Text>
                    <Text style={styles.textOder}>taste and color. Enjoy!</Text>
                </View>
            </View>


            <TouchableOpacity style={styles.buttonContainer}>

                <View style={{ marginTop: 42 }}>
                    <Pressable style={styles.button}
                        onPress={() => navigation.navigate("Splash03")}>
                        <Text style={styles.next}>Next</Text>
                    </Pressable>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Splash02

const styles = StyleSheet.create({
    next: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20
    },
    button: {
        height: 57,
        width: 157,
        backgroundColor: '#53E88B',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 42,
    },
    buttonContainer: {
        //marginTop: 42,
        alignItems: 'center',
        height: '20%',
    },
    textOder: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        lineHeight: 21,
        textAlign: 'center',
        lineHeight:21,
        //marginTop: 10
    },
    textFindFood: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#09051C',
        textAlign: 'center',

        //marginTop: 10
    },
    textContainer: {
        alignItems: 'center',
        //marginTop: 39,
        height: '30%',
    },
    image: {
        width: 408,
        height: 434,
    },
    imageContainer: {
        //marginTop: 30,
        //marginTop: 162,
        alignItems: 'center',//ngang
        height: '50%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
})