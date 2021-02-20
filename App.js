import React from 'react';
import model from './app/model';
import { StoreProvider, createStore } from 'easy-peasy';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import RootAppNavigator from './app/navigation/RootAppNavigator';

const store = createStore(model);

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <RootAppNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
}
