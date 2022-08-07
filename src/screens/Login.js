import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, SafeAreaView, useColorScheme, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
// import { Ionicons } from '@expo/vector-icons';

const Login = (props) => {
    const isDarkMode = useColorScheme() === 'dark'
    const { navigation } = props;
    const [getPasswordVisible, setPasswordVisible] = useState(false);

    const [getEmail, setEmail] = useState('');
    console.log("GET EMAIL", getEmail);

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
        <SafeAreaView>

            <StatusBar barStyle={!isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.container}>
                <ImageBackground source={require('../Images/Pattern.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../Images/Logo.png')} resizeMode="cover" style={styles.logo} />
                        <Text style={styles.textFoodNinja}>FoodNinja</Text>
                        <Text style={styles.textDeliver}>Deliver Favorite Food</Text>
                    </View>

                    <View style={styles.accountContainer}>
                        <Text style={styles.accountText}>Login To Your Account</Text>
                    </View>

                    <View style={styles.textContainer}>
                        <View style={styles.textInputContainer}>
                            <Image style={styles.imageEmail} resizeMode='cover'
                                source={require('../Images/Email.png')} />
                            <TextInput
                                value={getEmail}
                                onChangeText={setEmail}
                                placeholder='Email'
                                style={styles.textInput} />

                        </View>
                        <View style={styles.textInputContainer}>
                            <Image style={styles.imageEmail} resizeMode='cover'
                                source={require('../Images/Lock.png')} />
                            <TextInput
                                placeholder='Password'
                                style={styles.textInput}
                                secureTextEntry={getPasswordVisible ? false : true} />

                            <TouchableOpacity
                            style={{ position: 'absolute', right: 0, marginRight: 5}}
                                onPress={() => {
                                    setPasswordVisible(!getPasswordVisible)
                                }}>

                                {getPasswordVisible ?
                                    <Image style={styles.imageEmail} resizeMode='cover'
                                        source={require('../Images/invisible.png')} />
                                    :
                                    <Image style={styles.imageEmail} resizeMode='cover'
                                        source={require('../Images/visible.png')} />}
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.orContainer}>
                        <Text style={styles.textOr}>Or Continue With</Text>
                    </View>

                    <View style={styles.socialNetworkContainer}>
                        <TouchableOpacity style={styles.facebookContainer}>
                            <Image style={styles.imageFacebook} resizeMode='cover'
                                source={require('../Images/facebook.png')} />
                            <Text style={styles.textFacebook}>Facebook</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.facebookContainer}>
                            <Image style={styles.imageFacebook} resizeMode='cover'
                                source={require('../Images/google.png')} />
                            <Text style={styles.textFacebook}>Google</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.forgotContainer}>
                        <Text style={styles.textForgot}>Forgot Your Password?</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={styles.button}>
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.registerContainer}>
                        <Text style={styles.textNoAccount}>Don’t have account?</Text>
                        <Text onPress={() => navigation.navigate('Register')} style={styles.textNewAccount}> Create new account.</Text>
                    </View>

                </ImageBackground>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexGrow: 1,
    },

    image: {
        flex: 1,
    },
    logoContainer: {
        alignItems: "center",
    },
    logo: {
        width: 175,
        height: 139
    },
    textFoodNinja: {
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
    },

    accountContainer: {
        //marginTop: 60,
        marginTop: 30,
        alignItems: 'center'
    },
    accountText: {
        fontSize: 20,
        color: '#09051C',
        fontWeight: 'bold'
    },

    textContainer: {
        marginTop: 34,
        marginHorizontal: 25
    },
    textInputContainer: {
        paddingLeft: 28,
        marginVertical: 6,
        borderRadius: 15,
        borderColor: '#EBF0FF',
        borderWidth: 1,
        height: 57,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        width: '100%'
    },
    textInput: {
        width: '90%',
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        //paddingHorizontal: 6,
        paddingRight: 20,
        paddingHorizontal: 6,
    },
    imageEmail: {
        //marginTop: 3,
    },

    orContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    textOr: {
        color: '#09051C',
        fontSize: 12,
        fontWeight: 'bold'
    },

    socialNetworkContainer: {
        flexDirection: 'row',
        marginHorizontal: 25,
        justifyContent: 'space-between',
        marginTop: 20
    },
    facebookContainer: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#F4F4F4",
        borderRadius: 15,
        //borderWidth: 1,
        width: 152,
        height: 57,
        elevation: 8
    },
    imageFacebook: {
        marginLeft: 22,
        marginVertical: 8,
        width: 28,
        height: 28,
    },
    textFacebook: {
        marginLeft: 14,
        color: '#09051C'
    },

    forgotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    textForgot: {
        fontSize: 12,
        fontWeight: '700',
        color: '#53E88B',
        height: 20,
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        height: 57,
        width: 141,
        backgroundColor: '#53E88B',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    login: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
        textTransform: 'none',
        textAlign: 'center',
    },

    registerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textNoAccount: {
        fontSize: 12,
        color: '#010F07'
    },
    textNewAccount: {
        fontSize: 12,
        color: '#22A45D'
    },
})