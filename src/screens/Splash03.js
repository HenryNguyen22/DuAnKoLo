import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const Splash03 = (props) => {
    const {navigation} = props;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode='cover'
                    source={require('../Images/Illustration.png')} />
            </View>

            <View style={styles.textContainer}>
                <View style={{ marginTop: 39}}>
                <Text style={styles.textFindFood}>Food Ninja is Where Your</Text>
                <Text style={styles.textFindFood}>Comfort Food Lives</Text>
                <Text style={styles.textOder}>Enjoy a fast and smooth food delivery at</Text>
                <Text style={styles.textOder}>your doorstep</Text>
                </View>
            </View>


            <TouchableOpacity style={styles.buttonContainer}>
                <View style={{ marginTop: 42}}>
                    <Pressable style={styles.button}
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.next}>Next</Text>
                    </Pressable>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Splash03

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
        alignItems: 'center'
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
        lineHeight:21
    },
    textFindFood: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#09051C',
        textAlign: 'center',
    },
    textContainer: {
        alignItems: 'center',
        //marginTop: 39,
        height: '30%',
    },
    image: {
        width: 408,
        height: 434
    },
    imageContainer: {
        marginTop: 30,
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