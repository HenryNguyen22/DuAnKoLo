import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Nofication = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Thông báo</Text>
    </View>
  )
}

export default Nofication

const styles = StyleSheet.create({})