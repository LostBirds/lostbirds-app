import React from 'react';
import Navigation from '@navigation/.';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

const rootViewStyle = {flex: 1};
const App = () => {
  return (
    <GestureHandlerRootView style={rootViewStyle}>
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;
