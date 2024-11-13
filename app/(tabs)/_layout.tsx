import { StyleSheet,Image, Text, View, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '@/constants'

const TabIcon = ({ icon, color, name, focused}: {icon: ImageSourcePropType, color: string, name: string, focused:boolean}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                style={styles.icon}
            />
            <Text style={[focused ? styles.iconLabelFocused : styles.iconLabel, {color: color}]} >{name}</Text>
        </View>
    )
}

const TabsLayouts = () => {
  return (
    <>
          <Tabs
              screenOptions={{
                  tabBarShowLabel: false,
                  tabBarActiveTintColor: '#FFA001',
                  tabBarInactiveTintColor: '#CDCDE0',
                  tabBarStyle: {
                      backgroundColor: '#161622',
                      borderTopWidth: 1,
                      borderTopColor: '#232533',
                      height: 84,
                  }
              }}>
              
              {/* Tabs */}

              <Tabs.Screen
                  name='home'
                  options={{
                      title: 'Home',
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                          <TabIcon
                              icon={icons.home}
                              color={color}
                              name='Home'
                              focused={focused}
                          />
                      )
                  }}
              />
              
              <Tabs.Screen
                  name='bookmark'
                  options={{
                      title: 'Bookmark',
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                          <TabIcon
                              icon={icons.bookmark}
                              color={color}
                              name='Bookmark'
                              focused={focused}
                          />
                      )
                  }}
              />

              <Tabs.Screen
                  name='create'
                  options={{
                      title: 'Create',
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                          <TabIcon
                              icon={icons.plus}
                              color={color}
                              name='Create'
                              focused={focused}
                          />
                      )
                  }}
              />

              <Tabs.Screen
                  name='profile'
                  options={{
                      title: 'Profile',
                      headerShown: false,
                      tabBarIcon: ({ color, focused }) => (
                          <TabIcon
                              icon={icons.profile}
                              color={color}
                              name='Profile'
                              focused={focused}
                          />
                      )
                  }}
              />

        </Tabs>
    </>
  )
}

export default TabsLayouts

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
        justifyContent: 'center'
    },
    iconLabel: {
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',

    },
    iconLabelFocused: {
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
})