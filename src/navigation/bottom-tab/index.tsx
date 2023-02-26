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
        tabBarActiveTintColor: colors.selected,
        tabBarInactiveTintColor: colors.unselected,
        tabBarShowLabel: false,
        headerShown: false,
      }}
      safeAreaInsets={{
        bottom: Platform.select({android: 6}),
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome5 name="home" size={24} color={colors.selected} />
            ) : (
              <FontAwesome5 name="home" size={24} color={colors.unselected} />
            ),
        }}
      />
      <BottomTab.Screen
        name="AboutApp"
        component={AboutAppNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome5
                name="question-circle"
                size={24}
                color={colors.selected}
              />
            ) : (
              <FontAwesome5
                name="question-circle"
                size={24}
                color={colors.unselected}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome5
                name="user-circle"
                size={24}
                color={colors.selected}
              />
            ) : (
              <FontAwesome5
                name="user-circle"
                size={24}
                color={colors.unselected}
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}
