import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    // Input Validation
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }

    // Submitting
    setIsSubmitting(true);

    try {
      // Attempt to create user
      const result = await createUser(form.email, form.password, form.username)

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
            title='Sign Up'
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