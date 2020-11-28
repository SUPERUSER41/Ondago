import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import RootAppNavigator from './app/navigation/RootAppNavigator';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <RootAppNavigator />
    </NavigationContainer>
  );
}
