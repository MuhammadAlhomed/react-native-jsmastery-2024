import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'

import { icons} from '@/constants'

const FormField = ({
    title, value, placeholder, handleChangeText, otherStyles, ...props
    }: {
        title: string,
        value: any,
        placeholder?: string,
        handleChangeText: ((text: string) => void) | undefined,
        otherStyles: ViewStyle
    }) => {
    
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={[styles.view, otherStyles]}>
          <Text style={styles.text}>{title}</Text>
          <View style={styles.formField}>
              <TextInput
                  style={styles.textInput}
                  value={value}
                  placeholder={placeholder}
                  placeholderTextColor='#7b7b8b'
                  onChangeText={handleChangeText}
                  secureTextEntry={title === 'Password' && !showPassword}
              />
            
              {title === 'Password' && (
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <Image
                          source={!showPassword ? icons.eye : icons.eyeHide}
                          style={{width:32 ,height:32, marginLeft: 4}}
                      />
                  </TouchableOpacity>
              )}
              
          </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
    view: {
        marginVertical: 16,
    },
    text: {
        marginVertical: 4,
        color: 'gray',
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    },
    formField: {
        minHeight: 64,
        backgroundColor: '#212130',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        padding: 16
    },
    textInput: {
        width:'100%',
        color: 'lightgrey',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    }
})