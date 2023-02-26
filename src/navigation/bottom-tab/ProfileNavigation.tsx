import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '@/screens/profile/1-profile';

export type ProfileParamList = {
  'profile/main': undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileParamList>();

export default function AboutAppNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profile/main"
        component={Profile}
        options={{
          headerShown: false,
          headerTitle: '프로필',
        }}
      />
    </ProfileStack.Navigator>
  );
}
