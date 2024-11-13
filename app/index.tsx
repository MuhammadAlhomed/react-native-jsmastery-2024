import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={style.container}>
          <Text>Index</Text>
          <Link href='/home' style={{color: 'blue'}}>Go to Home</Link>
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