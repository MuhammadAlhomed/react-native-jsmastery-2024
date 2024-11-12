import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  return (
    <View style={style.container}>
          <Text>Index</Text>
          <StatusBar style='auto'/>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})