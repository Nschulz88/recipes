// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';

const { useState } = React;

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default (): React.Node => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
    />;
  }
  return <MealsNavigator />;
};
