import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import {colors} from '@/style/theme';

const style = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3.43,
    marginTop: 20,
    borderRadius: 12,
  },
  topPadding: {
    flex: 2,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
  },
  description: {
    flex: 5,
    flexDirection: 'row',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 32,
    color: 'black',
    flex: 8,
  },
  descriptionText: {
    fontSize: 21,
    color: 'black',
    flex: 8,
  },
  padding: {
    flex: 1,
  },
  submitButton: {
    flex: 8,
    borderColor: '#F24726',
    borderRadius: 20,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#F24726',
    fontSize: 24,
  },
  bottomPaddingView: {
    flex: 2,
  },
});

const SubmitButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={style.submitButton}>
    <Text style={style.submitButtonText}>{title}</Text>
  </TouchableOpacity>
);

const viewStyle = {
  flex: 1,
  backgroundColor: colors.background1,
};

export default function Home() {
  return (
    <SafeAreaView style={viewStyle}>
      <View style={style.topPadding} />
      <View style={style.title}>
        <Text style={style.padding} />
        <Text style={style.titleText}>LostBirds</Text>
        <Text style={style.padding} />
      </View>
      <View style={style.description}>
        <Text style={style.padding} />
        <Text style={style.descriptionText}>
          Lost Birds looks at photos of birds around you and lets you know if a
          bird is lost or wandering.
        </Text>
        <Text style={style.padding} />
      </View>
      <View style={style.buttonView}>
        <Text style={style.padding} />
        <SubmitButton
          title="Submit your photo!"
          onPress={() => Alert.alert('Submit button pressed')}
        />
        <Text style={style.padding} />
      </View>
      <View style={style.bottomPaddingView} />
    </SafeAreaView>
  );
}
