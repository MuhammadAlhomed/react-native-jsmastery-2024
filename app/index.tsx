import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'

export default function Index() {
  return (
    <SafeAreaView style={style.safeAreaView}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={style.view}>

          <Image
            source={images.logo}
            style={{
              height: 50
              
            }}
            resizeMode='contain'
          />

          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    safeAreaView: {
      backgroundColor: '#161622',
      height: '100%'
  },
  view: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  }
})