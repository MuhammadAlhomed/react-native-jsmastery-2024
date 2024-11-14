import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'

export default function Index() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={styles.view}>

          <Image
            source={images.logo}
            style={{
              height: 50,
            }}
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            style={{
              width: 380,
              height: 300,
            }}
            resizeMode='contain'
          />

          <View style={{marginTop:24, alignItems: 'center'}}>
            <Text style={styles.landingText}>
              Discover Endless Possiblities with <Text style={[styles.landingText, {color: '#FFA001'}]}>Aora</Text>
            </Text>
          </View>

          <Text style={styles.landingSubText}>
            Where creativity meets innovation:
            embark on a journey of limitless exploration with Aora
          </Text>

          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/sign-in') }
            containerStyles={{width: '100%', marginTop: 24}}
          />
          
        </View>
      </ScrollView>
      
      {/* For Phone Status Bar, Turn it "light" because our app is in darkmode. This is not a visual component */}
      <StatusBar backgroundColor='#161622' style='light'/> 

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeAreaView: {
      backgroundColor: '#161622',
      height: '100%',
      padding: 12,
  },
  view: {
    width: '100%',
    minHeight: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  landingText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center'
  },
  landingSubText: {
    marginTop: 12,
    fontSize: 12,
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  }
})