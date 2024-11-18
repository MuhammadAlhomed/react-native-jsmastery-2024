import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '@/lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    
    // Input Validation
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }

    // Submitting
    setIsSubmitting(true);

    try {
      // Attempt to create user
      await signIn(form.email, form.password)

      // Set it to global state...
      router.replace('/home');
        
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }

    setIsSubmitting(false);
    // End Submitting

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
          <Text style={styles.loginHeader}>Log in to Aora</Text>

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
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <Link href='/sign-up' style={[styles.signUpText, {color: '#FFA001'}]}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

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