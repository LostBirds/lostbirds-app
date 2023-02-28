import React from 'react';
import HomeNavigator from './HomeNavigation';
import AboutAppNavigator from './AboutAppNavigation';
import ProfileNavigator from './ProfileNavigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import {colors} from '@style/theme';

export type BottomTabParamList = {
  Home: undefined;
  AboutApp: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.selected1,
        tabBarInactiveTintColor: colors.unselected,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          flex: 0.15,
          backgroundColor: colors.background2,
        },
      }}
      safeAreaInsets={{
        bottom: Platform.select({android: 6}),
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AboutApp"
        component={AboutAppNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="question-circle" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user-circle" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
