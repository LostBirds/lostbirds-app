import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/home/1-main';

export type HomeParamList = {
  'home/main': undefined;
};

const HomeStack = createNativeStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home/main"
        component={Home}
        options={{
          headerShown: false,
          headerTitle: '홈',
        }}
      />
    </HomeStack.Navigator>
  );
}
