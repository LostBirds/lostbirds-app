import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '@/style/theme';

const style = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3.43,
    marginTop: 20,
    borderRadius: 12,
  },
});

const viewStyle = {
  flex: 1,
  backgroundColor: colors.background1,
};
export default function AboutApp() {
  return (
    <SafeAreaView style={viewStyle}>
      <ScrollView>
        <View>
          <Text>About App</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
