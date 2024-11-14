import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React from 'react'

const CustomButton = ({title='Button', handlePress, containerStyles, textStyles, isLoading=false}: {title: string, handlePress?: (event:GestureResponderEvent)=>any | undefined, containerStyles?: ViewStyle, textStyles?: TextStyle, isLoading?: boolean}) => {
    return (
      <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[styles.button,
                isLoading ? { opacity: 0.5 } : { opacity: 1 },
                containerStyles
            ]}
            disabled={isLoading}
      >
            <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        padding: 6,
        minHeight: 62,
        backgroundColor: '#FFA001',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15, 
        
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    }
})