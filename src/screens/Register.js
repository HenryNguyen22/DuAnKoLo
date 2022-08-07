import { StyleSheet, Text, View, ImageBackground, TextInput, Image, Pressable, SafeAreaView, StatusBar, useColorScheme, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
// import { Ionicons } from '@expo/vector-icons';



const Register = (props) => {
    const { navigation } = props;
    const isDarkMode = useColorScheme() === 'dark'

    const [getEmail, setEmail] = useState('');
    const [getPasswordVisible, setPasswordVisible] = useState(false);

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
                        <Text style={styles.accountText}>Sign Up For Free </Text>
                    </View>

                    <View style={styles.textContainer}>
                        <View style={styles.textInputContainer}>
                            <Image style={styles.imageEmail} resizeMode='cover'
                                source={require('../Images/Profile.png')} />
                            <TextInput
                                placeholder='Anamwp . . |'
                                style={styles.textInput} />
                        </View>

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

                            <TouchableOpacity style={{ position: 'absolute', right: 0, marginRight: 5}}
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

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                            <Text style={styles.login}>Create Account</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.registerContainer}>
                        <Text onPress={() => navigation.navigate('Login')} style={styles.textNewAccount}>Already have an account?</Text>
                    </View>

                </ImageBackground>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

export default Register

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
        marginTop: 47
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
        elevation: 3
    },
    textInput: {
        width: '90%',
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        //paddingHorizontal: 6,
        paddingRight: 20
    },
    imageEmail: {
        //marginTop: 3,
    },

    buttonContainer: {
        alignItems: 'center',
        marginTop: 44
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
        textTransform: 'uppercase',
        textAlign: 'center'
    },

    registerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
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