import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={[styles.view, {marginTop: '30%'}]}>
          <Image
            source={images.logo}
            resizeMode='contain'
            style={{
              height: 48,
              width: 150
            }}
          />
          <Text style={styles.loginHeader}>Sign Up to Aora</Text>

          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={{ marginTop: 24 }}
          />

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 24 }}
            // keyboardType='email-address'
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 24 }}
          />

          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyles={{ marginTop: 24 }}
            isLoading={isSubmitting}
          />
          <View style={{marginTop: 24 ,alignItems: 'center', flex:1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.signUpText}>Have an account already? </Text>
            <Link href='/sign-in' style={[styles.signUpText, {color: '#FFA001'}]}>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  safeAreaView: {
      backgroundColor: '#161622',
      height: '100%',
  },
  view: {
    minHeight: '85%',
    justifyContent: 'center',
    padding: 4,
    margin: 12,
  },
    loginHeader: {
      fontSize: 24,
      marginTop: 24,
      color: 'white',
      fontFamily: 'Poppins-SemiBold',
    // textAlign: 'center'
  },
  signUpText: {
    fontSize: 16,
    color: 'lightgray',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
})