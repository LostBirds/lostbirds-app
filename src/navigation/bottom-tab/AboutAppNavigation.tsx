import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutApp from '@/screens/aboutapp/1-about-app';

export type AboutAppParamList = {
  'about-app/main': undefined;
};

const AboutAppStack = createNativeStackNavigator<AboutAppParamList>();

export default function AboutAppNavigator() {
  return (
    <AboutAppStack.Navigator>
      <AboutAppStack.Screen
        name="about-app/main"
        component={AboutApp}
        options={{
          headerShown: false,
          headerTitle: '앱 설명',
        }}
      />
    </AboutAppStack.Navigator>
  );
}
